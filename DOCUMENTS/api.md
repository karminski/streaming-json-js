
DOCUMENTS
---------

The use of the streamingjson library is very simple. There is only one object exported by the library, called ```Lexer```. ```Lexer``` has two public methods, which are ```AppendString``` and ```CompleteJSON```:
- ```AppendString``` takes a string as an argument and is responsible for receiving streaming JSON fragments.
- ```CompleteJSON``` has no arguments and returns a string. It is responsible for completing the JSON fragments received by ```AppendString``` into a complete, syntactically valid JSON string.

For detailed usage, see [examples](../examples/).
