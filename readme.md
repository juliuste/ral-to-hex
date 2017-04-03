# ral-to-hex

Convert RAL colour codes to HEX codes.

[![npm version](https://img.shields.io/npm/v/ral-to-hex.svg)](https://www.npmjs.com/package/ral-to-hex)
[![Build Status](https://travis-ci.org/juliuste/ral-to-hex.svg?branch=master)](https://travis-ci.org/juliuste/ral-to-hex)
[![dependency status](https://img.shields.io/david/juliuste/ral-to-hex.svg)](https://david-dm.org/juliuste/ral-to-hex)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/ral-to-hex.svg)](https://david-dm.org/juliuste/ral-to-hex#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/ral-to-hex.svg?style=flat)](LICENSE)

## Installation

```bash
npm install --save ral-to-hex
```

## Usage

```js
const hex = require('ral-to-hex')

let colour1 = hex(5025) // '#2A6478' (RAL 5025)
let colour2 = hex(2013) // '#C35831' (RAL 2013)
```

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/ral-to-hex/issues).