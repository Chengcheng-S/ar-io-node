# Changelog

## 1.0.0 (2023-11-28)


### Features

* add support for uploading observer reports PE-4797 ([0c7fa42](https://github.com/Chengcheng-S/ar-io-node/commit/0c7fa42769e5aafaccb6cfafba92f8fed53e9bfe))
* **block-store:** implement `KvBlockStore` and use it with `lmdb` implementation ([0e6d458](https://github.com/Chengcheng-S/ar-io-node/commit/0e6d45896d62792b848125a9e9650a4c8c93ed98))
* bump observer version ([4576ef7](https://github.com/Chengcheng-S/ar-io-node/commit/4576ef7b4c49dd0c72e585afc8cec122956a87c7))
* **chain-cache:** add environment variable CHAIN_CACHE_TYPE and use it when setting up KvTransactionStore ([c80cc3d](https://github.com/Chengcheng-S/ar-io-node/commit/c80cc3d872ceacc2ccc067e939ab36e67d4a528a))
* **envoy:** route /ar-io/observer to the observer service PE-4797 ([52f39b3](https://github.com/Chengcheng-S/ar-io-node/commit/52f39b3f6c33b1fb7a8400baa50fd2a6cbfca828))
* expose X-ArNS-* headers for CORS requests ([ee03255](https://github.com/Chengcheng-S/ar-io-node/commit/ee032553ec485cb056cb4285f4953b8dd267865b))
* **info observer:** advertise the contract ID in use PE-4894 ([4dd26c8](https://github.com/Chengcheng-S/ar-io-node/commit/4dd26c8a45481409455068c8acd7fba5e30682ac))
* **kv-block-store:** add `KvBlockStore` that uses `KvBufferStore` for storing block data ([2773376](https://github.com/Chengcheng-S/ar-io-node/commit/27733767016d67c0d4ef449d6399dc17906656d1))
* **kv-transaction-store:** setup a KvTransactionStore that uses KvBufferStore and implements PartialJsonTransactionStore ([c3ea32b](https://github.com/Chengcheng-S/ar-io-node/commit/c3ea32b362187057b34585231470c924d5365123))
* **kv:** introduce KVBufferStore interface and implement filesystem based KVBufferStore ([7554ea4](https://github.com/Chengcheng-S/ar-io-node/commit/7554ea4d3405d83854ba84158b0be20ecaddd010))
* **lmbd:** introduce lmdb, implement LmbdbKvStore ([16c07a6](https://github.com/Chengcheng-S/ar-io-node/commit/16c07a69d8b362b18f8312d2452ffe5c5296aff4))
* **lmdb:** enable `compression` and add `commitDelay` on LmdbKVStore ([ac8358b](https://github.com/Chengcheng-S/ar-io-node/commit/ac8358b04685a7e4292b05fc3b5b97d28194ae30))
* **observer:** add observer service to docker-compose config PE-4797 ([209ad85](https://github.com/Chengcheng-S/ar-io-node/commit/209ad850421c2ee2b4424ee371fce7d37bd48fd2))
* **observer:** bump image to add ARM support PE-4870 ([c3856b3](https://github.com/Chengcheng-S/ar-io-node/commit/c3856b3cb67ebae2fb246f5b60325fea0d158eba))
* **observer:** bump observer version to get report compression PE-4991 ([16b2868](https://github.com/Chengcheng-S/ar-io-node/commit/16b28682e74cbe1d50a5e7198018a32a70638f5e))
* **observer:** bump version for better missing wallet handing PE-4749 ([8035bb4](https://github.com/Chengcheng-S/ar-io-node/commit/8035bb4b5465178f52227f74f753d481f8780d65))
* **observer:** enable observer by default PE-4749 ([0d6b6a8](https://github.com/Chengcheng-S/ar-io-node/commit/0d6b6a86a8c96b85ca197d024120826157fa8ebc))
* **redis:** add redis implementation of `KvBufferStore` ([3df8928](https://github.com/Chengcheng-S/ar-io-node/commit/3df892805e5adaf67a6139ca26aff9a48e1a0071))
* **redis:** add redis to docker-compose and use it as default `KvBufferStore` ([4c56473](https://github.com/Chengcheng-S/ar-io-node/commit/4c564732b705644918e47a677d9c59708ae47146))
* rename OBSERVER_DATA_PATH to REPORTS_DATA_PATH PE-4816 ([1a2dfbf](https://github.com/Chengcheng-S/ar-io-node/commit/1a2dfbfd926a88977b33ec889d08d47e73bb0b7e))
* **sandbox:** use https as default protocol for sandboxing ([38eb496](https://github.com/Chengcheng-S/ar-io-node/commit/38eb4969a30d229bb52df05a4f0578cce18864ba)), closes [#56](https://github.com/Chengcheng-S/ar-io-node/issues/56)
* **validation:** use regex to sanity check block hashes ([a8b639b](https://github.com/Chengcheng-S/ar-io-node/commit/a8b639b317f2888758aae9faa6a3f76fe9433c18))


### Bug Fixes

* **docker redis:** fix typo in docker-compose PE-4924 ([0fd341b](https://github.com/Chengcheng-S/ar-io-node/commit/0fd341b9f4488c0b490399f6626f239ae9dda532))
* **docker:** add `LMDB_DATA_PATH` volume mount ([a6bd399](https://github.com/Chengcheng-S/ar-io-node/commit/a6bd3991cbe135b87475d5ca72eddbe6b2eee6a8))
* **docker:** fix `maxmemory` flag in docker file for redis ([3e32dd7](https://github.com/Chengcheng-S/ar-io-node/commit/3e32dd74b574fa6b7f7d0bd72903ee19aec05668))
* **graphql:** order tags by tag index PE-5115 ([7efe274](https://github.com/Chengcheng-S/ar-io-node/commit/7efe274d7e76cf561fe027832669b9c3ede33eb6))
* **kv-store:** remove extra checks in lmdb-kv-store ([fe08a3c](https://github.com/Chengcheng-S/ar-io-node/commit/fe08a3cbd61e155df62baa5f1c57aed66e7e9c50))
* **lmdb:** guarantee returning a buffer from lmdb ([7a17b32](https://github.com/Chengcheng-S/ar-io-node/commit/7a17b32546707b40f748a68712b23be379430388))
* **observer:** bump observer to fix cache/referesh timing ([c3e6376](https://github.com/Chengcheng-S/ar-io-node/commit/c3e637645bd8e1343faf3f2ddc79a19fafd4c537))
* **observer:** bump version to fix healthcheck ([9312e59](https://github.com/Chengcheng-S/ar-io-node/commit/9312e59722df59eee08747e2a02b681724a1d9e5))
* **range:** return 416 instead of 200 for multiple range requests PE-4908 ([d81bc52](https://github.com/Chengcheng-S/ar-io-node/commit/d81bc52fe46915f467710e74841696a25171d99c))
* **redis:** add `ttl` to all redis keys and by default set it to 8 hours ([1fe0b65](https://github.com/Chengcheng-S/ar-io-node/commit/1fe0b65b39b0796240c04ddd3ea617f4201efdad))
* **redis:** add prometheus metric to redis errors, set max memory to 2GiB ([4060728](https://github.com/Chengcheng-S/ar-io-node/commit/4060728dcef108e9057dc24e30154b87e898bfca))
* **redis:** update the kv-store defaults in docker vs. app ([528649c](https://github.com/Chengcheng-S/ar-io-node/commit/528649c5776716990b6d29c893205545f2630b9f))
* **sqlite debug:** correct typo in debug key ([9a0777b](https://github.com/Chengcheng-S/ar-io-node/commit/9a0777bdbd81ebea1215e56c3e37d3a2bc510baf))
* **system:** fix import for kvstore util ([18f01b5](https://github.com/Chengcheng-S/ar-io-node/commit/18f01b58e347b3cedcf7c270f9f81a8d46d70aa6))


### Reverts

* **lmdb:** disable compression and simplify parameters passed to LmdbKVStore ([7a6731d](https://github.com/Chengcheng-S/ar-io-node/commit/7a6731d4f1d63c5c0b8a9c542a09b9641db0138b))
