var expect = require('expect.js');

// js 测试源文件
var streamingjson = require('../src/index.js');



describe('Test complete JSON base', () => {
  const testCases = [
    [`{"a`, `{"a":null}`],
    [`{"a"`, `{"a":null}`],
    [`{"a":`, `{"a":null}`],
    [`{"a":n`, `{"a":null}`],
    [`{"a":nu`, `{"a":null}`],
    [`{"a":nul`, `{"a":null}`],
  ];

  testCases.forEach(([testCase, expected]) => {
    it(`Completes JSON string from "${testCase}" to "${expected}"`, () => {
      const lexer = new streamingjson.Lexer();
      lexer.AppendJSONString(testCase);
      const ret = lexer.CompleteJSON();
      expect(ret).to.equal(expected);
    });
  });
});

// describe('Test complete JSON nested', () => {
//   it('should correctly process and validate a complex, nested JSON string', () => {
//     const streamingJSONContent = '{"string": "这是一个字符串", "integer": 42, "float": 3.14159, "boolean_true": true, "boolean_false": false, "null": null, "object": {"empty_object": {}, "non_empty_object": {"key": "value"}, "nested_object": {"nested_key": {"sub_nested_key": "sub_nested_value"}}}, "array":["string in array", 123, 45.67, true, false, null, {"object_in_array": "object_value"},["nested_array"]]}'

//     const lexer = new streamingjson.Lexer();
//     Array.from(streamingJSONContent).forEach(char => {
//       const errInAppendString = lexer.AppendString(char);
//       expect(errInAppendString).toBeNull();
//     });

//     const ret = lexer.CompleteJSON();
//     let parsedJSON;

//     expect(() => {
//       parsedJSON = JSON.parse(ret);
//     }).not.toThrow();

//     expect(parsedJSON).toBeDefined();
//   });
// });


// describe('Test complete JSON nested 2', () => {
//   it('should correctly process and validate a complex, nested JSON string', () => {
//     const streamingJSONContent = `{
//         "string_with_escape_chars": "This string contains escape characters like \\"quotes\\", \\\\backslashes\\\\, \\/forwardslashes/, \\bbackspace\\b, \\fformfeed\\f, \\nnewline\\n, \\rcarriage return\\r, \\ttab\\t.",
//             "scientific_notation": 2.998e8,
//                 "unicode_characters": "Some unicode characters: \\u0041\\u0042\\u0043\\u0044",
//                     "multiple_lang_strings": {
//             "english": "Hello, World!",
//                 "chinese": "你好，世界！",
//                     "spanish": "¡Hola, mundo!",
//                         "russian": "Привет, мир!"
//         },
//         "json_tokens_as_strings": "{\\"key_with_invalid_token\\": \\"value_with_invalid_separator\\": \\"a\\"}",
//             "nested_objects": {
//             "nested_object1": {
//                 "key1": "value1",
//                     "key2": "value2",
//                         "nested_object2": {
//                     "inner_key1": "inner_value1",
//                         "inner_key2": "inner_value2"
//                 }
//             },
//             "nested_object2": {
//                 "name": "John Doe",
//                     "age": 30,
//                         "address": {
//                     "street": "123 Main St",
//                         "city": "Anytown"
//                 }
//             }
//         },
//         "array_test": {
//             "simple_array": [10, 20, 30, 40, 50],
//                 "array_of_objects": [
//                     {
//                         "name": "Alice",
//                         "age": 25
//                     },
//                     {
//                         "name": "Bob",
//                         "age": 30
//                     }
//                 ],
//                     "nested_arrays": [
//                         [1, 2, 3],
//                         [true, false, null]
//                     ],
//                         "empty_objects": { },
//             "empty_arrays": []
//         }
//     }`

//     const lexer = new streamingjson.Lexer();
//     Array.from(streamingJSONContent).forEach(char => {
//       const errInAppendString = lexer.AppendString(char);
//       expect(errInAppendString).toBeNull();
//     });

//     const ret = lexer.CompleteJSON();
//     let parsedJSON;

//     expect(() => {
//       parsedJSON = JSON.parse(ret);
//     }).not.toThrow();

//     expect(parsedJSON).toBeDefined();
//   });
// });


// describe('Test complete JSON escape and etc', () => {
//   it('should correctly process and validate a complex, nested JSON string', () => {
//     const streamingJSONContent = `{
//     "string": "含有转义字符的字符串：\\"\\\\\\/\\b\\f\\n\\r\\t",
//     "string_unicode": "含Unicode字符：\\u6211\\u662F",
//     "negative_integer": -42,
//     "float_scientific_notation": 6.02e23,
//     "negative_float": -3.14159,
//     "array_with_various_numbers": [
//         0,
//         -1,
//         2.99792458e8,
//         -6.62607015e-34
//     ],
//     "special_characters": "\\u003C\\u003E\\u0026\\u0027\\u0022",
//     "nested_structure": {
//         "nested_key_with_escaped_chars": "这是一个带有转义字符的字符串：\\\\n\\\\r\\\\t",
//         "nested_object": {
//             "bool_true": true,
//             "bool_false": false,
//             "null_value": null,
//             "complex_number": 3.14e-10
//         }
//     }
// }`

//     const lexer = new streamingjson.Lexer();
//     Array.from(streamingJSONContent).forEach(char => {
//       const errInAppendString = lexer.AppendString(char);
//       expect(errInAppendString).toBeNull();
//     });

//     const ret = lexer.CompleteJSON();
//     let parsedJSON;

//     expect(() => {
//       parsedJSON = JSON.parse(ret);
//     }).not.toThrow();

//     expect(parsedJSON).toBeDefined();
//   });
// });
