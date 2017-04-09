# arr-uni [![Build Status](https://travis-ci.org/maticzav/arr-uni.svg?branch=master)](https://travis-ci.org/maticzav/arr-uni)

> Get the union of multiple arrays.
> Works with objects, array of objects, arrays of arrays etc. (It works!)

## Install

```
$ npm install --save arr-uni
```


## Usage

```js
const a = { foo: 1, bar: { zoo: 1} }
const b = { foo: 1 }
const c = { foo: 1, bar: 1 }

const uin1 = union([a, b], [a, c], [a, b, c])
//=> [a,b,c]

const uin2 = union([[a, b], [a, c], [a, b, c]])
//=> [a,b,c]
```
