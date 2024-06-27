# [streaming-json](https://github.com/karminski/streaming-json)
[![codecov](https://codecov.io/gh/karminski/streaming-json-js/graph/badge.svg?token=N8TO15P7XE)](https://codecov.io/gh/karminski/streaming-json-js)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/karminski/streaming-json/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/streaming-json)
[![NPM downloads](http://img.shields.io/npm/dm/streaming-json.svg?style=flat-square)](http://www.npmtrends.com/streaming-json)

Welcome to **streaming-json-js**, a groundbreaking library designed to revolutionize the way we handle stream JSON parsing.  

In an era dominated by LLMs (Large Language Models), the ability to efficiently parse JSON streams is more critical than ever. Traditionally, JSON parsing libraries have fallen short, requiring JSON data to be fully generated before any parsing can begin. streaming-json-go challenges this limitation head-on.

### Key Features

- **Real-Time JSON Parsing**: With streaming-json-go, you no longer need to wait for the entire JSON data to be generated. This library allows for the parsing of JSON as it is being streamed (this means JSON stream can stops at any position), significantly cutting down the time-to-first-token.
- **Seamless Integration**: Designed to complement existing JSON parsing libraries, streaming-json-go preprocesses incomplete JSON strings, transforming them into valid, parseable JSON. This means you can continue using your preferred JSON library with our tool seamlessly.
- **Enhanced User Experience**: By enabling real-time data processing, our library drastically reduces the wait time for end-users. Display JSON structures to users without the delay typically associated with complete JSON generation.


### Usage Instructions

Using npm, download and install the code. 

```bash
$ npm install --save streamingjson
```

For node environment：

```js
const streamingjson = require('streamingjson');
```

For webpack or similar environment：

```js
import streamingjson from 'streamingjson';
```

For browser environment:

```html
<script src="node_modules/streamingjson/dist/index.aio.js"></script>
```

### Example Usage

Basically, this library is used to complete fragmented JSON, making it into syntactically correct JSON. For example:

```{"a":``` will complete to ```{"a":null}```

and When the JSON stream continues to output as:

```{"a":[tr``` will complete to ```{"a":[true]}```

Do not worry about the JSON stream stopping anywhere, such as at a comma:

```{"a":[true],``` will complete to ```{"a":[true]}```

Escaped characters? No problem:  

```{"a":[true], "b": "this is unicode \u54"``` will complete to ```{"a":[true], "b": "this is unicode "}``` 

(After the stream outputs the complete Unicode, it will then display.)


**Here’s a quick example to get you started:**

```javascript
// init, @NOTE: We need to assign a new lexer for each JSON stream.
lexer = new streamingjson.Lexer();

// append your JSON segment
lexer.AppendString(`{"a":`)

// complete the JSON
console.log(lexer.CompleteJSON()); // will print `{"a":null}`

// append more JSON segment
lexer.AppendString(`[tr`)

// complete the JSON again
console.log(lexer.CompleteJSON()); // will print `{"a":[true]}`
```


For more examples please see: [examples](./examples/)

## Characteristics

- Coded in ES6+ or TypeScript, easily compile and generate production code
- Supports multi environment, including default browsers, Node, AMD, CMD, Webpack, Rollup, Fis and so on.
- Integrated [jsmini](https://github.com/jsmini)

**Note:** When `export` and `export default` are not used at the same time, there is the option to 
turn on `legacy mode`. Under `legacy mode`, the module system can be compatible with `IE6-8`. For more information on legacy mode, 
please see rollup supplemental file. 

## Compatibility
Unit tests guarantee support on the following environment:

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 11+   | 100+ | 100+  | 16+   | 100+  | 10.3+   | 4.1+   | 16+ |

> Note: Compiling code depend on ES5, so you need import [es5-shim](http://github.com/es-shims/es5-shim/) to compatible with `IE6-8`, here is a [demo](./demo/demo-global.html)



### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

