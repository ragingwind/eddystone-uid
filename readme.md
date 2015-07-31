# eddystone-uid [![Build Status](https://travis-ci.org/ragingwind/eddystone-uid.svg?branch=master)](https://travis-ci.org/ragingwind/eddystone-uid)

> My first-class module


## Install

```
$ npm install --save eddystone-uid
```


## Usage

```js
var eddystoneUid = require('eddystone-uid');

eddystoneUid.toBeaconId('123456');
eddystoneUid.toBeaconId('app-id');
eddystoneUid.toNamespace('https://goo.gl/r8iJqW');
eddystoneUid.toNamespace('8b0ca750-e7a7-4e14-bd99-095477cb3e77');
//=> unicorns & rainbows
```

## API

### toBeaconId(src, encoding)

#### src

String to Beacon/Instance Id

#### encoding

Encoding type of Beacon Id, It returns String as encoding in `hex` other is `buf` to return raw Buffer

### toNamespace(src)

#### src

Using FQDN or UUID, which will be hashed and then truncated. Please refer [more info](https://github.com/ragingwind/eddystone/tree/master/eddystone-uid#truncated-hash-of-fqdn)

## License

MIT © [ragingwind](http://ragingwind.me)
