# basic-random

> Generate randoms things like int, float, items of an array, and more

## Install

```
$ npm install basic-random
```

## Usage

```js
const basicRandom = require('basic-random');
const Random = new basicRandom();

Random.randomInt(5)
//=> 2

Random.randomInt(10,100)
//=> 65

Random.randomFloat(5, 10)
//=> 6.849534501223438

Random.randomFloat(0, 5, 3)
//=> 2.395
```

## API

### randomInt(maximum?)

Returns an integer from `0` to `maximum`.

### randomInt(minimum, maximum)

Returns an integer from `minimum` to `maximum`.

### randomFloat(maximum?)

Returns an float from `0` to `maximum`.

### randomFloat(minimum, maximum)

Returns an float from `minimum` to `maximum`.

### randomFloat(minimum, maximum, decimals)

Returns an float from `minimum` to `maximum` with number of 'decimals' value.

### randomItem(array)

Returns an random item from `array`.

### randomItem(array, count)

Returns `count` random items from `array`.

### randomObjKey(object)

Returns an random key from `object`.

### randomObjKey(object, count)

Returns `count` random keys from `object`.


#### minimum

Type: `number`\
Default: `0`

Minimum integer to return.

#### maximum

Type: `number`\
Default: `1`

Maximum integer to return.

### decimals

Type: `number`\
Default: `15`

Number of decimals.

### array

Type: `array`\
Default: `undefined`

Array which will be used.

### count

Type: `number`\
Default: `1`

Number of items you want.
