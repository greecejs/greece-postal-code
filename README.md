# greece-postal-code [![Build Status](https://travis-ci.org/greecejs/greece-postal-code.svg?branch=master)](https://travis-ci.org/greecejs/greece-postal-code) [![Coverage Status](https://coveralls.io/repos/github/greecejs/greece-postal-code/badge.svg?branch=master)](https://coveralls.io/github/greecejs/greece-postal-code?branch=master) [![npm](https://img.shields.io/npm/v/greece-postal-code.svg)](https://www.npmjs.com/package/greece-postal-code)

> Validation of postal codes used in Greece.

> Έλεγχος εγκυρότητας ενός ελληνικού ταχυδρομικού κώδικα.

## Installation

```sh
$ npm install greece-postal-code
```

## Usage

To validate a postal code:

```js
var postalCode = require('greece-postal-code');

postalCode.validate('10188'); // true
postalCode.validate('ab1234'); // false
```

Please note that the validation is strict, for example it will not allow spaces. Use `clean()` to remove any whitespace from the postal code string before validating it:

```js
postalCode.validate('101 88 '); // false
var cleaned = postalCode.clean('101 88 '); // '10188'
postalCode.validate(cleaned); // true
```

## License

[MIT](http://opensource.org/licenses/mit-license.php)
