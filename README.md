# key-code
[![Build Status](https://travis-ci.org/thiagogarbazza/key-code.svg?branch=master)](https://travis-ci.org/thiagogarbazza/key-code)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/thiagogarbazza/key-code/)


Library for key-code constants in ECMAScript/Javascript

For more information [see this](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#Constants_for_keyCode_value).

See [key-code.js](src/key-code.js)  for a full list of all the constants

## Installation

### Using NPM

```sh
npm install --save key-code
```

### Using Bower

```sh
bower install --save key-code
```

## Usage

### Using NodeJs

Include the package using CommonJS require()
```js
var KeyCode = require('key-code');
```

or ES2015 import:
```js
// ES2015+
import KeyCode from 'key-code';
```

### Using Browser

```html
<!-- Load files. -->
<script src="/path/to/key-code/dist/key-code.js"></script>

<input type="text" onkeydown="myFunction(event)">
```

```js
function myFunction(event) {
    if (event.keyCode === KeyCode.ENTER) {
        alert('keypress ENTER');
    }
}
```

## License

The `key-code` project is under MIT license.
