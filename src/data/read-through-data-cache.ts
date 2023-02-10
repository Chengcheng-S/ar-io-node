import crypto from 'crypto';
import { pipeline } from 'stream';
import winston from 'winston';

import {
  ContiguousData,
  ContiguousDataAttributes,
  ContiguousDataIndex,
  ContiguousDataSource,
  ContiguousDataStore,
} from '../types.js';

export class ReadThroughDataCache implements ContiguousDataSource {
  private log: winston.Logger;
  private dataSource: ContiguousDataSource;
  private dataStore: ContiguousDataStore;
  private contiguousDataIndex: ContiguousDataIndex;

  constructor({
    log,
    dataSource,
    dataStore,
    contiguousDataIndex,
  }: {
    log: winston.Logger;
    dataSource: ContiguousDataSource;
    dataStore: ContiguousDataStore;
    contiguousDataIndex: ContiguousDataIndex;
  }) {
    this.log = log.child({ class: 'ReadThroughDataCache' });
    this.dataSource = dataSource;
    this.dataStore = dataStore;
    this.contiguousDataIndex = contiguousDataIndex;
  }

  async getData(
    id: string,
    dataAttributes?: ContiguousDataAttributes,
  ): Promise<ContiguousData> {
    this.log.info('Checking for cached data...', {
      id,
    });
    const attributes =
      dataAttributes ?? (await this.contiguousDataIndex.getDataAttributes(id));
    if (attributes?.hash !== undefined) {
      try {
        const hash = attributes.hash;
        this.log.info('Found data hash in index', { id, hash });
        const cacheStream = await this.dataStore.get(hash);
        if (cacheStream === undefined) {
          this.log.info('Unable to find data in cache', { id, hash });
        } else {
          this.log.info('Found data in cache', { id, hash });
          return {
            hash,
            stream: cacheStream,
            size: attributes.size,
            sourceContentType: attributes.contentType,
            verified: attributes.verified,
          };
        }
      } catch (error: any) {
        this.log.error('Error getting data from cache:', {
          id,
          message: error.message,
          stack: error.stack,
        });
      }
    }

    const data = await this.dataSource.getData(id, dataAttributes);
    const hasher = crypto.createHash('sha256');
    const cacheStream = await this.dataStore.createWriteStream();
    pipeline(data.stream, cacheStream, async (error: any) => {
      if (error !== undefined) {
        this.log.error('Error streaming or caching data:', {
          id,
          message: error.message,
          stack: error.stack,
        });
        // TODO unlink temp file?
      } else {
        if (cacheStream !== undefined) {
          const hash = hasher.digest('base64url');

          this.log.info('Successfully cached data', { id, hash });
          await this.contiguousDataIndex.saveDataContentAttributes({
            id,
            dataRoot: attributes?.dataRoot,
            hash,
            dataSize: data.size,
            contentType: data.sourceContentType,
          });

          try {
            await this.dataStore.finalize(cacheStream, hash);
          } catch (error: any) {
            this.log.error('Error finalizing data in cache:', {
              id,
              message: error.message,
              stack: error.stack,
            });
          }
        }
      }
    });
    data.stream.on('data', (chunk) => {
      hasher.update(chunk);
    });

    return data;
  }
}