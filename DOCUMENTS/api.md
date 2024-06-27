
DOCUMENTS
---------

The use of the streamingjson library is very simple. There is only one object exported by the library, called ```Lexer```. ```Lexer``` has two public methods, which are ```AppendJSONString``` and ```CompleteJSON```:
- ```AppendJSONString``` takes a string as an argument and is responsible for receiving streaming JSON fragments.
- ```CompleteJSON``` has no arguments and returns a string. It is responsible for completing the JSON fragments received by ```AppendJSONString``` into a complete, syntactically valid JSON string.

For detailed usage, see [examples](../examples/).
