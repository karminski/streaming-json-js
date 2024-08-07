var streamingjson = require('../dist/index.js');

// case A, complete the incomplete JSON object
lexer = new streamingjson.Lexer();
lexer.AppendString(`{"a":`); // will complete to `{"a":null}`
console.log(lexer.CompleteJSON());

// case B, complete the incomplete JSON array
lexer = new streamingjson.Lexer();
lexer.AppendString(`[t`); // will complete to `[true]`
console.log(lexer.CompleteJSON());
