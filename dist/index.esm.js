/*!
 * streaming-json 0.1.4 (https://github.com/karminski/streaming-json)
 * API https://github.com/karminski/streaming-json/blob/master/doc/api.md
 * Copyright 2017-2024 karminski. All Rights Reserved
 * Licensed under MIT (https://github.com/karminski/streaming-json/blob/master/LICENSE)
 */

import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _reverseInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/reverse';
import _sliceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/slice';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';

var _TOKEN_SYMBOL_MAP;
// token const
var TOKEN_EOF = 0; // end-of-file
var TOKEN_IGNORED = 1; // \t', '\n', '\v', '\f', '\r', ' '
var TOKEN_LEFT_BRACKET = 2; // [
var TOKEN_RIGHT_BRACKET = 3; // ]
var TOKEN_LEFT_BRACE = 4; // {
var TOKEN_RIGHT_BRACE = 5; // }
var TOKEN_COLON = 6; // :
var TOKEN_DOT = 7; // .
var TOKEN_COMMA = 8; // ,
var TOKEN_QUOTE = 9; // "
var TOKEN_ESCAPE_CHARACTER = 10; // \
var TOKEN_SLASH = 11; // /
var TOKEN_NEGATIVE = 12; // -
var TOKEN_NULL = 13; // null
var TOKEN_TRUE = 14; // true
var TOKEN_FALSE = 15; // false
var TOKEN_ALPHABET_LOWERCASE_A = 16; // a
var TOKEN_ALPHABET_LOWERCASE_B = 17; // b
var TOKEN_ALPHABET_LOWERCASE_C = 18; // c
var TOKEN_ALPHABET_LOWERCASE_D = 19; // d
var TOKEN_ALPHABET_LOWERCASE_E = 20; // e
var TOKEN_ALPHABET_LOWERCASE_F = 21; // f
var TOKEN_ALPHABET_LOWERCASE_L = 22; // l
var TOKEN_ALPHABET_LOWERCASE_N = 23; // n
var TOKEN_ALPHABET_LOWERCASE_R = 24; // r
var TOKEN_ALPHABET_LOWERCASE_S = 25; // s
var TOKEN_ALPHABET_LOWERCASE_T = 26; // t
var TOKEN_ALPHABET_LOWERCASE_U = 27; // u
var TOKEN_ALPHABET_UPPERCASE_A = 28; // A
var TOKEN_ALPHABET_UPPERCASE_B = 29; // B
var TOKEN_ALPHABET_UPPERCASE_C = 30; // C
var TOKEN_ALPHABET_UPPERCASE_D = 31; // D
var TOKEN_ALPHABET_UPPERCASE_E = 32; // E
var TOKEN_ALPHABET_UPPERCASE_F = 33; // F
var TOKEN_NUMBER = 34; // number
var TOKEN_NUMBER_0 = 35; // 0
var TOKEN_NUMBER_1 = 36; // 1
var TOKEN_NUMBER_2 = 37; // 2
var TOKEN_NUMBER_3 = 38; // 3
var TOKEN_NUMBER_4 = 39; // 4
var TOKEN_NUMBER_5 = 40; // 5
var TOKEN_NUMBER_6 = 41; // 6
var TOKEN_NUMBER_7 = 42; // 7
var TOKEN_NUMBER_8 = 43; // 8
var TOKEN_NUMBER_9 = 44; // 9
var TOKEN_OTHERS = 45; // anything else in json

// token symbol const
var TOKEN_EOF_SYMBOL = 'EOF';
var TOKEN_LEFT_BRACKET_SYMBOL = '[';
var TOKEN_RIGHT_BRACKET_SYMBOL = ']';
var TOKEN_LEFT_BRACE_SYMBOL = '{';
var TOKEN_RIGHT_BRACE_SYMBOL = '}';
var TOKEN_COLON_SYMBOL = ':';
var TOKEN_DOT_SYMBOL = '.';
var TOKEN_COMMA_SYMBOL = ',';
var TOKEN_QUOTE_SYMBOL = '"';
var TOKEN_ESCAPE_CHARACTER_SYMBOL = '\\';
var TOKEN_SLASH_SYMBOL = '/';
var TOKEN_NEGATIVE_SYMBOL = '-';
var TOKEN_NULL_SYMBOL = 'null';
var TOKEN_TRUE_SYMBOL = 'true';
var TOKEN_FALSE_SYMBOL = 'false';
var TOKEN_ALPHABET_LOWERCASE_A_SYMBOL = 'a';
var TOKEN_ALPHABET_LOWERCASE_B_SYMBOL = 'b';
var TOKEN_ALPHABET_LOWERCASE_C_SYMBOL = 'c';
var TOKEN_ALPHABET_LOWERCASE_D_SYMBOL = 'd';
var TOKEN_ALPHABET_LOWERCASE_E_SYMBOL = 'e';
var TOKEN_ALPHABET_LOWERCASE_F_SYMBOL = 'f';
var TOKEN_ALPHABET_LOWERCASE_L_SYMBOL = 'l';
var TOKEN_ALPHABET_LOWERCASE_N_SYMBOL = 'n';
var TOKEN_ALPHABET_LOWERCASE_R_SYMBOL = 'r';
var TOKEN_ALPHABET_LOWERCASE_S_SYMBOL = 's';
var TOKEN_ALPHABET_LOWERCASE_T_SYMBOL = 't';
var TOKEN_ALPHABET_LOWERCASE_U_SYMBOL = 'u';
var TOKEN_ALPHABET_UPPERCASE_A_SYMBOL = 'A';
var TOKEN_ALPHABET_UPPERCASE_B_SYMBOL = 'B';
var TOKEN_ALPHABET_UPPERCASE_C_SYMBOL = 'C';
var TOKEN_ALPHABET_UPPERCASE_D_SYMBOL = 'D';
var TOKEN_ALPHABET_UPPERCASE_E_SYMBOL = 'E';
var TOKEN_ALPHABET_UPPERCASE_F_SYMBOL = 'F';
var TOKEN_NUMBER_0_SYMBOL = '0';
var TOKEN_NUMBER_1_SYMBOL = '1';
var TOKEN_NUMBER_2_SYMBOL = '2';
var TOKEN_NUMBER_3_SYMBOL = '3';
var TOKEN_NUMBER_4_SYMBOL = '4';
var TOKEN_NUMBER_5_SYMBOL = '5';
var TOKEN_NUMBER_6_SYMBOL = '6';
var TOKEN_NUMBER_7_SYMBOL = '7';
var TOKEN_NUMBER_8_SYMBOL = '8';
var TOKEN_NUMBER_9_SYMBOL = '9';

// token symbol const
var TOKEN_SYMBOL_MAP = (_TOKEN_SYMBOL_MAP = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_EOF, TOKEN_EOF_SYMBOL), TOKEN_LEFT_BRACKET, TOKEN_LEFT_BRACKET_SYMBOL), TOKEN_RIGHT_BRACKET, TOKEN_RIGHT_BRACKET_SYMBOL), TOKEN_LEFT_BRACE, TOKEN_LEFT_BRACE_SYMBOL), TOKEN_RIGHT_BRACE, TOKEN_RIGHT_BRACE_SYMBOL), TOKEN_COLON, TOKEN_COLON_SYMBOL), TOKEN_DOT, TOKEN_DOT_SYMBOL), TOKEN_COMMA, TOKEN_COMMA_SYMBOL), TOKEN_QUOTE, TOKEN_QUOTE_SYMBOL), TOKEN_ESCAPE_CHARACTER, TOKEN_ESCAPE_CHARACTER_SYMBOL), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_SLASH, TOKEN_SLASH_SYMBOL), TOKEN_NEGATIVE, TOKEN_NEGATIVE_SYMBOL), TOKEN_NULL, TOKEN_NULL_SYMBOL), TOKEN_TRUE, TOKEN_TRUE_SYMBOL), TOKEN_FALSE, TOKEN_FALSE_SYMBOL), TOKEN_ALPHABET_LOWERCASE_A, TOKEN_ALPHABET_LOWERCASE_A_SYMBOL), TOKEN_ALPHABET_LOWERCASE_B, TOKEN_ALPHABET_LOWERCASE_B_SYMBOL), TOKEN_ALPHABET_LOWERCASE_C, TOKEN_ALPHABET_LOWERCASE_C_SYMBOL), TOKEN_ALPHABET_LOWERCASE_D, TOKEN_ALPHABET_LOWERCASE_D_SYMBOL), TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_E_SYMBOL), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_ALPHABET_LOWERCASE_F, TOKEN_ALPHABET_LOWERCASE_F_SYMBOL), TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L_SYMBOL), TOKEN_ALPHABET_LOWERCASE_N, TOKEN_ALPHABET_LOWERCASE_N_SYMBOL), TOKEN_ALPHABET_LOWERCASE_R, TOKEN_ALPHABET_LOWERCASE_R_SYMBOL), TOKEN_ALPHABET_LOWERCASE_S, TOKEN_ALPHABET_LOWERCASE_S_SYMBOL), TOKEN_ALPHABET_LOWERCASE_T, TOKEN_ALPHABET_LOWERCASE_T_SYMBOL), TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_U_SYMBOL), TOKEN_ALPHABET_UPPERCASE_A, TOKEN_ALPHABET_UPPERCASE_A_SYMBOL), TOKEN_ALPHABET_UPPERCASE_B, TOKEN_ALPHABET_UPPERCASE_B_SYMBOL), TOKEN_ALPHABET_UPPERCASE_C, TOKEN_ALPHABET_UPPERCASE_C_SYMBOL), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_ALPHABET_UPPERCASE_D, TOKEN_ALPHABET_UPPERCASE_D_SYMBOL), TOKEN_ALPHABET_UPPERCASE_E, TOKEN_ALPHABET_UPPERCASE_E_SYMBOL), TOKEN_ALPHABET_UPPERCASE_F, TOKEN_ALPHABET_UPPERCASE_F_SYMBOL), TOKEN_NUMBER_0, TOKEN_NUMBER_0_SYMBOL), TOKEN_NUMBER_1, TOKEN_NUMBER_1_SYMBOL), TOKEN_NUMBER_2, TOKEN_NUMBER_2_SYMBOL), TOKEN_NUMBER_3, TOKEN_NUMBER_3_SYMBOL), TOKEN_NUMBER_4, TOKEN_NUMBER_4_SYMBOL), TOKEN_NUMBER_5, TOKEN_NUMBER_5_SYMBOL), TOKEN_NUMBER_6, TOKEN_NUMBER_6_SYMBOL), _defineProperty(_defineProperty(_defineProperty(_TOKEN_SYMBOL_MAP, TOKEN_NUMBER_7, TOKEN_NUMBER_7_SYMBOL), TOKEN_NUMBER_8, TOKEN_NUMBER_8_SYMBOL), TOKEN_NUMBER_9, TOKEN_NUMBER_9_SYMBOL));

// helper method check if token is in ignore token
function isIgnoreToken(c) {
  switch (c) {
    case '\t':
    case '\n':
    case '\v':
    case '\f':
    case '\r':
    case ' ':
      return true;
  }
  return false;
}

// get array real length
function arrayLength(a) {
  var _context;
  if (!a) {
    return 0;
  }
  return _filterInstanceProperty(_context = _Object$keys(a)).call(_context, function (el) {
    return !(+el % 1) && +el >= 0 && +el < Math.pow(2, 32);
  }).length;
}

// helper method match stack with tokens
function matchStack(stack, tokens) {
  var pointer = arrayLength(stack);
  var tokensLeft = arrayLength(tokens);
  for (;;) {
    tokensLeft--;
    pointer--;
    if (tokensLeft < 0) {
      break;
    }
    if (pointer < 0) {
      return false;
    }
    if (stack[pointer] !== tokens[tokensLeft]) {
      return false;
    }
  }
  return true;
}

// main lexer
var Lexer = /*#__PURE__*/function () {
  function Lexer() {
    _classCallCheck(this, Lexer);
    this.JSONContent = ''; // input JSON content
    this.PaddingContent = ''; // padding content for ignored characters and escape characters, etc.
    this.JSONSegment = ''; // appended JSON segment by the AppendString() method.
    this.TokenStack = []; // token stack for input JSON
    this.MirrorTokenStack = []; // token stack for auto-completed tokens
  }

  // Get token on the stack top
  _createClass(Lexer, [{
    key: "getTopTokenOnStack",
    value: function getTopTokenOnStack() {
      if (this.TokenStack.length === 0) {
        return TOKEN_EOF;
      }
      return this.TokenStack[this.TokenStack.length - 1];
    }

    // Get token on the mirror stack top
  }, {
    key: "getTopTokenOnMirrorStack",
    value: function getTopTokenOnMirrorStack() {
      if (this.MirrorTokenStack.length === 0) {
        return TOKEN_EOF;
      }
      return this.MirrorTokenStack[this.MirrorTokenStack.length - 1];
    }

    // Pop token on the stack top
  }, {
    key: "popTokenStack",
    value: function popTokenStack() {
      if (this.TokenStack.length === 0) {
        return TOKEN_EOF;
      }
      return this.TokenStack.pop();
    }

    // Pop token on the mirror stack top
  }, {
    key: "popMirrorTokenStack",
    value: function popMirrorTokenStack() {
      if (this.MirrorTokenStack.length === 0) {
        return TOKEN_EOF;
      }
      return this.MirrorTokenStack.pop();
    }

    // Push token into the stack
  }, {
    key: "pushTokenStack",
    value: function pushTokenStack(token) {
      this.TokenStack.push(token);
    }

    // Push token into the mirror stack
  }, {
    key: "pushMirrorTokenStack",
    value: function pushMirrorTokenStack(token) {
      this.MirrorTokenStack.push(token);
    }

    // Convert mirror stack token into string
  }, {
    key: "dumpMirrorTokenStackToString",
    value: function dumpMirrorTokenStackToString() {
      var _context2, _context3, _context4;
      var ret = '';
      _forEachInstanceProperty(_context2 = _reverseInstanceProperty(_context3 = _sliceInstanceProperty(_context4 = this.MirrorTokenStack).call(_context4)).call(_context3)).call(_context2, function (item) {
        ret += TOKEN_SYMBOL_MAP[item];
      });
      return ret;
    }

    // Skip JSON segment by length n
  }, {
    key: "skipJSONSegment",
    value: function skipJSONSegment(n) {
      this.JSONSegment = this.JSONSegment.substring(n);
    }

    // Push negative symbol `-` into JSON content
  }, {
    key: "pushNegativeIntoJSONContent",
    value: function pushNegativeIntoJSONContent() {
      this.JSONContent += TOKEN_NEGATIVE_SYMBOL;
    }

    // Push byte into JSON content by given
  }, {
    key: "pushByteIntoPaddingContent",
    value: function pushByteIntoPaddingContent(s) {
      this.PaddingContent += s;
    }

    // Append padding content into JSON content
  }, {
    key: "appendPaddingContentToJSONContent",
    value: function appendPaddingContentToJSONContent() {
      this.JSONContent += this.PaddingContent;
    }

    // Check if padding content is empty
  }, {
    key: "havePaddingContent",
    value: function havePaddingContent() {
      return this.PaddingContent.length > 0;
    }

    // Set padding content to empty
  }, {
    key: "cleanPaddingContent",
    value: function cleanPaddingContent() {
      this.PaddingContent = '';
    }

    // check if JSON stream stopped at an object property's key start, like `{"`
  }, {
    key: "streamStoppedInAnObjectKeyStart",
    value: function streamStoppedInAnObjectKeyStart() {
      // `{`, `"` in stack, or `,`, `"` in stack
      var case1 = [TOKEN_LEFT_BRACE, TOKEN_QUOTE];
      var case2 = [TOKEN_COMMA, TOKEN_QUOTE];
      // `}` in mirror stack
      var case3 = [TOKEN_RIGHT_BRACE];
      return (matchStack(this.TokenStack, case1) || matchStack(this.TokenStack, case2)) && matchStack(this.MirrorTokenStack, case3);
    }

    // check if JSON stream stopped in an object property's key, like `{"field`
  }, {
    key: "streamStoppedInAnObjectKeyEnd",
    value: function streamStoppedInAnObjectKeyEnd() {
      // `{`, `"`, `"` in stack, or `,`, `"`, `"` in stack
      var case1 = [TOKEN_LEFT_BRACE, TOKEN_QUOTE, TOKEN_QUOTE];
      var case2 = [TOKEN_COMMA, TOKEN_QUOTE, TOKEN_QUOTE];
      // `"`, `:`, `n`, `u`, `l`, `l`, `}` in mirror stack
      var case3 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N, TOKEN_COLON, TOKEN_QUOTE];
      return (matchStack(this.TokenStack, case1) || matchStack(this.TokenStack, case2)) && matchStack(this.MirrorTokenStack, case3);
    }

    // check if JSON stream stopped in an object property's value start, like `{"field": "`
  }, {
    key: "streamStoppedInAnObjectStringValueStart",
    value: function streamStoppedInAnObjectStringValueStart() {
      // `:`, `"` in stack
      var case1 = [TOKEN_COLON, TOKEN_QUOTE];
      // `n`, `u`, `l`, `l`, `}` in mirror stack
      var case2 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N];
      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
    }

    // check if JSON stream stopped in an object property's value finish, like `{"field": "value"`
  }, {
    key: "streamStoppedInAnObjectValueEnd",
    value: function streamStoppedInAnObjectValueEnd() {
      // `"`, `}` left
      var tokens = [TOKEN_RIGHT_BRACE, TOKEN_QUOTE];
      return matchStack(this.MirrorTokenStack, tokens);
    }

    // check if JSON stream stopped in an object property's value start by array, like `{"field":[`
  }, {
    key: "streamStoppedInAnObjectArrayValueStart",
    value: function streamStoppedInAnObjectArrayValueStart() {
      // `:`, `[` in stack
      var case1 = [TOKEN_COLON, TOKEN_LEFT_BRACKET];
      // `n`, `u`, `l`, `l`, `}` in mirror stack
      var case2 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N];
      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
    }

    // check if JSON stream stopped in an object property's value start by object, like `{"field":{`
  }, {
    key: "streamStoppedInAnObjectObjectValueStart",
    value: function streamStoppedInAnObjectObjectValueStart() {
      // `:`, `{` in stack
      var case1 = [TOKEN_COLON, TOKEN_LEFT_BRACE];
      // `n`, `u`, `l`, `l`, `}` in mirror stack
      var case2 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N];
      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
    }

    // check if JSON stream stopped in an object property's negative number value start, like `:-`
  }, {
    key: "streamStoppedInAnObjectNegativeNumberValueStart",
    value: function streamStoppedInAnObjectNegativeNumberValueStart() {
      // `:`, `-` in stack
      var case1 = [TOKEN_COLON, TOKEN_NEGATIVE];
      return matchStack(this.TokenStack, case1);
    }

    // check if JSON stream stopped in an object property's negative number value start, like `-`
  }, {
    key: "streamStoppedInANegativeNumberValueStart",
    value: function streamStoppedInANegativeNumberValueStart() {
      // `-` in stack
      var case1 = [TOKEN_NEGATIVE];
      // `0` in mirror stack
      var case2 = [TOKEN_NUMBER_0];
      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
    }

    // check if JSON stream stopped in an array
  }, {
    key: "streamStoppedInAnArray",
    value: function streamStoppedInAnArray() {
      return this.getTopTokenOnMirrorStack() === TOKEN_RIGHT_BRACKET;
    }

    // check if JSON stream stopped in an array's string value end, like `["value"]`
  }, {
    key: "streamStoppedInAnArrayStringValueEnd",
    value: function streamStoppedInAnArrayStringValueEnd() {
      // `"`, `"` in stack
      var case1 = [TOKEN_QUOTE, TOKEN_QUOTE];
      // `"`, `]` in mirror stack
      var case2 = [TOKEN_RIGHT_BRACKET, TOKEN_QUOTE];
      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
    }

    // check if JSON stream stopped in an object property's value start by array, like `{"field":{`
  }, {
    key: "streamStoppedInAnObjectNullValuePlaceholderStart",
    value: function streamStoppedInAnObjectNullValuePlaceholderStart() {
      // `n`, `u`, `l`, `l`, `}` in mirror stack
      var case1 = [TOKEN_RIGHT_BRACE, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_N];
      return matchStack(this.MirrorTokenStack, case1);
    }

    // check if JSON stream stopped in a string, like `""`
  }, {
    key: "streamStoppedInAString",
    value: function streamStoppedInAString() {
      return this.getTopTokenOnStack() === TOKEN_QUOTE && this.getTopTokenOnMirrorStack() === TOKEN_QUOTE;
    }

    // check if JSON stream stopped in a string's unicode escape, like `\u????`
  }, {
    key: "streamStoppedInAnStringUnicodeEscape",
    value: function streamStoppedInAnStringUnicodeEscape() {
      // `\`, `u` in stack
      var case1 = [TOKEN_ESCAPE_CHARACTER, TOKEN_ALPHABET_LOWERCASE_U];
      // `"` in mirror stack
      var case2 = [TOKEN_QUOTE];
      return matchStack(this.TokenStack, case1) && matchStack(this.MirrorTokenStack, case2);
    }

    // check if JSON stream stopped in a number, like `[0-9]`
  }, {
    key: "streamStoppedInANumber",
    value: function streamStoppedInANumber() {
      return this.getTopTokenOnStack() === TOKEN_NUMBER;
    }

    // check if JSON stream stopped in a number first decimal place, like `.?`
  }, {
    key: "streamStoppedInANumberDecimalPart",
    value: function streamStoppedInANumberDecimalPart() {
      return this.getTopTokenOnStack() === TOKEN_DOT;
    }

    // check if JSON stream stopped in a number other decimal places (except first place), like `.[0-9]?`
  }, {
    key: "streamStoppedInANumberDecimalPartMiddle",
    value: function streamStoppedInANumberDecimalPartMiddle() {
      // `.`, TOKEN_NUMBER in stack
      var case1 = [TOKEN_DOT, TOKEN_NUMBER];
      return matchStack(this.TokenStack, case1);
    }

    // check if JSON stream stopped in escape character, like `\`
  }, {
    key: "streamStoppedWithLeadingEscapeCharacter",
    value: function streamStoppedWithLeadingEscapeCharacter() {
      return this.getTopTokenOnStack() === TOKEN_ESCAPE_CHARACTER;
    }

    // lexer match JSON token method, convert JSON segment to JSON token
  }, {
    key: "matchToken",
    value: function matchToken() {
      // segment end
      if (this.JSONSegment.length === 0) {
        return [TOKEN_EOF, 0];
      }
      var tokenSymbol = this.JSONSegment.substring(0, 1);

      // check if ignored token
      if (isIgnoreToken(tokenSymbol)) {
        this.skipJSONSegment(1);
        return [TOKEN_IGNORED, tokenSymbol];
      }

      // match token
      switch (tokenSymbol) {
        case TOKEN_LEFT_BRACKET_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_LEFT_BRACKET, tokenSymbol];
        case TOKEN_RIGHT_BRACKET_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_RIGHT_BRACKET, tokenSymbol];
        case TOKEN_LEFT_BRACE_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_LEFT_BRACE, tokenSymbol];
        case TOKEN_RIGHT_BRACE_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_RIGHT_BRACE, tokenSymbol];
        case TOKEN_COLON_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_COLON, tokenSymbol];
        case TOKEN_DOT_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_DOT, tokenSymbol];
        case TOKEN_COMMA_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_COMMA, tokenSymbol];
        case TOKEN_QUOTE_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_QUOTE, tokenSymbol];
        case TOKEN_ESCAPE_CHARACTER_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ESCAPE_CHARACTER, tokenSymbol];
        case TOKEN_SLASH_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_SLASH, tokenSymbol];
        case TOKEN_NEGATIVE_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NEGATIVE, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_A_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_A, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_B_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_B, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_C_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_C, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_D_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_D, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_E_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_E, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_F_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_F, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_L_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_L, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_N_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_N, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_R_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_R, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_S_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_S, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_T_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_T, tokenSymbol];
        case TOKEN_ALPHABET_LOWERCASE_U_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_LOWERCASE_U, tokenSymbol];
        case TOKEN_ALPHABET_UPPERCASE_A_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_UPPERCASE_A, tokenSymbol];
        case TOKEN_ALPHABET_UPPERCASE_B_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_UPPERCASE_B, tokenSymbol];
        case TOKEN_ALPHABET_UPPERCASE_C_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_UPPERCASE_C, tokenSymbol];
        case TOKEN_ALPHABET_UPPERCASE_D_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_UPPERCASE_D, tokenSymbol];
        case TOKEN_ALPHABET_UPPERCASE_E_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_UPPERCASE_E, tokenSymbol];
        case TOKEN_ALPHABET_UPPERCASE_F_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_ALPHABET_UPPERCASE_F, tokenSymbol];
        case TOKEN_NUMBER_0_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_0, tokenSymbol];
        case TOKEN_NUMBER_1_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_1, tokenSymbol];
        case TOKEN_NUMBER_2_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_2, tokenSymbol];
        case TOKEN_NUMBER_3_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_3, tokenSymbol];
        case TOKEN_NUMBER_4_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_4, tokenSymbol];
        case TOKEN_NUMBER_5_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_5, tokenSymbol];
        case TOKEN_NUMBER_6_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_6, tokenSymbol];
        case TOKEN_NUMBER_7_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_7, tokenSymbol];
        case TOKEN_NUMBER_8_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_8, tokenSymbol];
        case TOKEN_NUMBER_9_SYMBOL:
          this.skipJSONSegment(1);
          return [TOKEN_NUMBER_9, tokenSymbol];
        default:
          this.skipJSONSegment(1);
          return [TOKEN_OTHERS, tokenSymbol];
      }
    }

    // append JSON string to current JSON stream content
    // this method will traversal all token and generate mirror token for complete full JSON
  }, {
    key: "AppendString",
    value: function AppendString(str) {
      var _this = this,
        _context5;
      this.JSONSegment = str;
      for (;;) {
        var _this$matchToken = this.matchToken(),
          _this$matchToken2 = _slicedToArray(_this$matchToken, 2),
          token = _this$matchToken2[0],
          tokenSymbol = _this$matchToken2[1];
        switch (token) {
          case TOKEN_EOF:
            // nothing to do with TOKEN_EOF
            break;
          case TOKEN_IGNORED:
            if (this.streamStoppedInAString()) {
              this.JSONContent += tokenSymbol;
              continue;
            }
            this.pushByteIntoPaddingContent(tokenSymbol);
            break;
          case TOKEN_OTHERS:
            // check if JSON stream stopped with padding content
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;
            break;
          case TOKEN_LEFT_BRACKET:
            // check if JSON stream stopped with padding content
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }
            this.JSONContent += tokenSymbol;
            if (this.streamStoppedInAString()) {
              continue;
            }
            this.pushTokenStack(token);
            if (this.streamStoppedInAnObjectArrayValueStart()) {
              // pop `n`, `u`, `l`, `l` from mirror stack
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
            }

            // push `]` into mirror stack
            this.pushMirrorTokenStack(TOKEN_RIGHT_BRACKET);
            break;
          case TOKEN_RIGHT_BRACKET:
            if (this.streamStoppedInAString()) {
              this.JSONContent += tokenSymbol;
              continue;
            }

            // check if JSON stream stopped with padding content
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // push `]` into stack
            this.pushTokenStack(token);
            // pop `]` from mirror stack
            this.popMirrorTokenStack();
            break;
          case TOKEN_LEFT_BRACE:
            // check if JSON stream stopped with padding content
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;
            if (this.streamStoppedInAString()) {
              continue;
            }
            this.pushTokenStack(token);
            if (this.streamStoppedInAnObjectObjectValueStart()) {
              // pop `n`, `u`, `l`, `l` from mirror stack
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
            }

            // push `}` into mirror stack
            this.pushMirrorTokenStack(TOKEN_RIGHT_BRACE);
            break;
          case TOKEN_RIGHT_BRACE:
            if (this.streamStoppedInAString()) {
              this.JSONContent += tokenSymbol;
              continue;
            }

            // check if JSON stream stopped with padding content
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }
            this.JSONContent += tokenSymbol;

            // push `}` into stack
            this.pushTokenStack(token);
            // pop `}` from mirror stack
            this.popMirrorTokenStack();
            break;
          case TOKEN_QUOTE:
            // check if escape quote `\"`
            if (this.streamStoppedWithLeadingEscapeCharacter()) {
              // push padding escape character `\` into JSON content
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();

              // write current token symbol to JSON content
              this.JSONContent += tokenSymbol;

              // pop `\` from stack
              this.popTokenStack();
              continue;
            }

            // check if json stream stopped with padding content
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;
            this.pushTokenStack(token);
            if (this.streamStoppedInAnArray()) {
              // push `"` into mirror stack
              this.pushMirrorTokenStack(TOKEN_QUOTE);
            } else if (this.streamStoppedInAnArrayStringValueEnd()) {
              // pop `"` from mirror stack
              this.popMirrorTokenStack();
            } else if (this.streamStoppedInAnObjectKeyStart()) {
              // push `"`, `:`, `n`, `u`, `l`, `l` into mirror stack
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_U);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_N);
              this.pushMirrorTokenStack(TOKEN_COLON);
              this.pushMirrorTokenStack(TOKEN_QUOTE);
            } else if (this.streamStoppedInAnObjectKeyEnd()) {
              // pop `"` from mirror stack
              this.popMirrorTokenStack();
            } else if (this.streamStoppedInAnObjectStringValueStart()) {
              // pop `n`, `u`, `l`, `l` from mirror stack
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              // push `"` into mirror stack
              this.pushMirrorTokenStack(TOKEN_QUOTE);
            } else if (this.streamStoppedInAnObjectValueEnd()) {
              // pop `"` from mirror stack
              this.popMirrorTokenStack();
            } else {
              throw new Error('invalid quote token in json stream');
            }
            break;
          case TOKEN_COLON:
            if (this.streamStoppedInAString()) {
              this.JSONContent += tokenSymbol;
              continue;
            }
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }
            this.JSONContent += tokenSymbol;
            this.pushTokenStack(token);
            this.popMirrorTokenStack();
            break;
          case TOKEN_ALPHABET_LOWERCASE_A:
            if (this.streamStoppedInAnStringUnicodeEscape()) {
              this.pushByteIntoPaddingContent(tokenSymbol);
              if (this.PaddingContent.length === 6) {
                this.appendPaddingContentToJSONContent();
                this.cleanPaddingContent();
                this.popTokenStack();
                this.popTokenStack();
              }
              continue;
            }
            this.JSONContent += tokenSymbol;
            if (this.streamStoppedInAString()) {
              continue;
            }
            this.itIsPartOfTokenFalse = function () {
              var left = [TOKEN_ALPHABET_LOWERCASE_F];
              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_S, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_A];
              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
            };
            if (!this.itIsPartOfTokenFalse()) {
              continue;
            }
            this.pushTokenStack(token);
            this.popMirrorTokenStack();
            break;
          case TOKEN_ALPHABET_LOWERCASE_B:
            // as hex in unicode
            if (this.streamStoppedInAnStringUnicodeEscape()) {
              this.pushByteIntoPaddingContent(tokenSymbol);

              // check if unicode escape is full length
              if (this.PaddingContent.length === 6) {
                this.appendPaddingContentToJSONContent();
                this.cleanPaddingContent();

                // pop `\`, `u` from stack
                this.popTokenStack();
                this.popTokenStack();
              }
              continue;
            }

            // \b escape `\`, `b`
            if (this.streamStoppedWithLeadingEscapeCharacter()) {
              // push padding escape character `\` into JSON content
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();

              // write current token symbol to JSON content
              this.JSONContent += tokenSymbol;

              // pop `\` from  stack
              this.popTokenStack();
              continue;
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }
            break;
          case TOKEN_ALPHABET_LOWERCASE_E:
            // as hex in unicode
            if (this.streamStoppedInAnStringUnicodeEscape()) {
              this.pushByteIntoPaddingContent(tokenSymbol);

              // check if unicode escape is full length
              if (this.PaddingContent.length === 6) {
                this.appendPaddingContentToJSONContent();
                this.cleanPaddingContent();

                // pop `\`, `u` from stack
                this.popTokenStack();
                this.popTokenStack();
              }
              continue;
            }

            // check if in a number, as `e` (exponent) in scientific notation
            if (this.streamStoppedInANumberDecimalPartMiddle()) {
              this.pushByteIntoPaddingContent(tokenSymbol);
              continue;
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }
            // Omitting boolean validation functions due to placeholder logic

            this.pushTokenStack(token);
            this.popMirrorTokenStack();
            break;
          case TOKEN_ALPHABET_LOWERCASE_F:
            // as hex in unicode
            if (this.streamStoppedInAnStringUnicodeEscape()) {
              this.pushByteIntoPaddingContent(tokenSymbol);
              // check if unicode escape is full length
              if (this.PaddingContent.length === 6) {
                this.appendPaddingContentToJSONContent();
                this.cleanPaddingContent();
                // pop `\`, `u` from stack
                this.popTokenStack();
                this.popTokenStack();
              }
              continue;
            }

            // \f escape `\`, `f`
            if (this.streamStoppedWithLeadingEscapeCharacter()) {
              // push padding escape character `\` into JSON content
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();

              // write current token symbol to JSON content
              this.JSONContent += tokenSymbol;

              // pop `\` from stack
              this.popTokenStack();
              continue;
            }

            // check if json stream stopped with padding content, like case `[true , f`
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }

            // push `f` into stack
            this.pushTokenStack(token);
            if (this.streamStoppedInAnArray()) {
              // in array
              // push `a`, `l`, `s`, `e`
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_E);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_S);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_A);
            } else {
              // in object
              // pop `n`, `u`, `l`, `l`
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              // push `a`, `l`, `s`, `e`
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_E);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_S);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_A);
            }
            break;
          case TOKEN_ALPHABET_LOWERCASE_L:
            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }

            // helper functions to check stack states
            this.itIsPartOfTokenFalse1 = function () {
              var left = [TOKEN_ALPHABET_LOWERCASE_F, TOKEN_ALPHABET_LOWERCASE_A];
              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_S, TOKEN_ALPHABET_LOWERCASE_L];
              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
            };
            this.itIsPartOfTokenNull1 = function () {
              var left = [TOKEN_ALPHABET_LOWERCASE_N, TOKEN_ALPHABET_LOWERCASE_U];
              var right = [TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L];
              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
            };
            this.itIsPartOfTokenNull2 = function () {
              var left = [TOKEN_ALPHABET_LOWERCASE_N, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_L];
              var right = [TOKEN_ALPHABET_LOWERCASE_L];
              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
            };
            if (!this.itIsPartOfTokenFalse1() && !this.itIsPartOfTokenNull1() && !this.itIsPartOfTokenNull2()) {
              continue;
            }
            this.pushTokenStack(token);
            this.popMirrorTokenStack();
            break;
          case TOKEN_ALPHABET_LOWERCASE_N:
            // \n escape `\`, `n`
            if (this.streamStoppedWithLeadingEscapeCharacter()) {
              // Push padding escape character `\` into JSON content
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();

              // Write current token symbol to JSON content
              this.JSONContent += tokenSymbol;

              // Pop `\` from stack
              this.popTokenStack();
              continue;
            }

            // Check if JSON stream stopped with padding content, like case `[true, n`
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }

            // Write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // In a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }

            // Push `n`
            this.pushTokenStack(token);
            if (this.streamStoppedInAnArray()) {
              // In array, push `u`, `l`, `l`
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_L);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_U);
            } else {
              // In object, pop `n`
              this.popMirrorTokenStack();
            }
            break;
          case TOKEN_ALPHABET_LOWERCASE_R:
            // \r escape `\`, `r`
            if (this.streamStoppedWithLeadingEscapeCharacter()) {
              // push padding escape character `\` into JSON content
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();

              // write current token symbol to JSON content
              this.JSONContent += tokenSymbol;

              // pop `\` from stack
              this.popTokenStack();
              continue;
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }

            // check if `t` in token stack and `r`, `u`, `e` in mirror stack
            this.itIsPartOfTokenTrue = function () {
              var left = [TOKEN_ALPHABET_LOWERCASE_T];
              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_R];
              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
            };
            if (!this.itIsPartOfTokenTrue()) {
              continue;
            }
            this.pushTokenStack(token);
            this.popMirrorTokenStack();
            break;
          case TOKEN_ALPHABET_LOWERCASE_S:
            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }

            // check if `f`, `a`, `l` in token stack and `s`, `e in mirror stack
            this.itIsPartOfTokenFalse2 = function () {
              var left = [TOKEN_ALPHABET_LOWERCASE_F, TOKEN_ALPHABET_LOWERCASE_A, TOKEN_ALPHABET_LOWERCASE_L];
              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_S];
              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
            };
            if (!this.itIsPartOfTokenFalse2()) {
              continue;
            }
            this.pushTokenStack(token);
            this.popMirrorTokenStack();
            break;
          case TOKEN_ALPHABET_LOWERCASE_T:
            // \t escape `\`, `t`
            if (this.streamStoppedWithLeadingEscapeCharacter()) {
              // push padding escape character `\` into JSON content
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();

              // write current token symbol to JSON content
              this.JSONContent += tokenSymbol;

              // pop `\` from stack
              this.popTokenStack();
              continue;
            }

            // check if json stream stopped with padding content, like case `[true , t`
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }

            // push `t` to stack
            this.pushTokenStack(token);
            if (this.streamStoppedInAnArray()) {
              // in array
              // push `r`, `u`, `e`
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_E);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_U);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_R);
            } else {
              // in object
              // pop `n`, `u`, `l`, `l`
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              // push `r`, `u`, `e`
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_E);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_U);
              this.pushMirrorTokenStack(TOKEN_ALPHABET_LOWERCASE_R);
            }
            break;
          case TOKEN_ALPHABET_LOWERCASE_U:
            // unicode escape `\`, `u`
            if (this.streamStoppedWithLeadingEscapeCharacter()) {
              this.pushTokenStack(token);
              this.PaddingContent += tokenSymbol;
              continue;
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }

            // check if `t`, `r` in token stack and, `u`, `e` in mirror stack
            this.itIsPartOfTokenTrue2 = function () {
              var left = [TOKEN_ALPHABET_LOWERCASE_T, TOKEN_ALPHABET_LOWERCASE_R];
              var right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_U];
              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
            };

            // check if `n` in token stack and `u`, `l`, `l` in mirror stack
            this.itIsPartOfTokenNull = function () {
              var left = [TOKEN_ALPHABET_LOWERCASE_N];
              var right = [TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U];
              return matchStack(_this.TokenStack, left) && matchStack(_this.MirrorTokenStack, right);
            };
            if (!this.itIsPartOfTokenTrue2() && !this.itIsPartOfTokenNull()) {
              continue;
            }
            this.pushTokenStack(token);
            this.popMirrorTokenStack();
            break;
          case TOKEN_ALPHABET_UPPERCASE_A:
          case TOKEN_ALPHABET_UPPERCASE_B:
          case TOKEN_ALPHABET_UPPERCASE_C:
          case TOKEN_ALPHABET_UPPERCASE_D:
          case TOKEN_ALPHABET_LOWERCASE_C:
          case TOKEN_ALPHABET_LOWERCASE_D:
          case TOKEN_ALPHABET_UPPERCASE_F:
            // as hex in unicode
            if (this.streamStoppedInAnStringUnicodeEscape()) {
              this.pushByteIntoPaddingContent(tokenSymbol);
              // check if unicode escape is full length
              if (this.PaddingContent.length === 6) {
                this.appendPaddingContentToJSONContent();
                this.cleanPaddingContent();
                // pop `\`, `u` from stack
                this.popTokenStack();
                this.popTokenStack();
              }
              continue;
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }
            break;
          case TOKEN_ALPHABET_UPPERCASE_E:
            // as hex in unicode
            if (this.streamStoppedInAnStringUnicodeEscape()) {
              this.pushByteIntoPaddingContent(tokenSymbol);
              // check if unicode escape is full length
              if (this.PaddingContent.length === 6) {
                this.appendPaddingContentToJSONContent();
                this.cleanPaddingContent();
                // pop `\`, `u` from stack
                this.popTokenStack();
                this.popTokenStack();
              }
              continue;
            }

            // check if in a number, as `E` (exponent) in scientific notation
            if (this.streamStoppedInANumberDecimalPartMiddle()) {
              this.pushByteIntoPaddingContent(tokenSymbol);
              continue;
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }
            break;
          case TOKEN_NUMBER_0:
          case TOKEN_NUMBER_1:
          case TOKEN_NUMBER_2:
          case TOKEN_NUMBER_3:
          case TOKEN_NUMBER_4:
          case TOKEN_NUMBER_5:
          case TOKEN_NUMBER_6:
          case TOKEN_NUMBER_7:
          case TOKEN_NUMBER_8:
          case TOKEN_NUMBER_9:
            if (this.streamStoppedInAnStringUnicodeEscape()) {
              this.pushByteIntoPaddingContent(tokenSymbol);
              // check if unicode escape is full length
              if (this.PaddingContent.length === 6) {
                this.appendPaddingContentToJSONContent();
                this.cleanPaddingContent();
                // pop `\`, `u` from stack
                this.popTokenStack();
                this.popTokenStack();
              }
              continue;
            }

            // check if json stream stopped with padding content, like `[1 , 1`
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }

            // in negative part of a number
            if (this.streamStoppedInANegativeNumberValueStart()) {
              this.pushNegativeIntoJSONContent();
              // pop `0` from mirror stack
              this.popMirrorTokenStack();
            }

            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string or a number, just skip token
            if (this.streamStoppedInAString() || this.streamStoppedInANumber()) {
              continue;
            }

            // in decimal part of a number
            if (this.streamStoppedInANumberDecimalPart()) {
              this.pushTokenStack(TOKEN_NUMBER);
              // pop placeholder `0` in decimal part
              this.popMirrorTokenStack();
              continue;
            }

            // first number type token, push token into stack
            this.pushTokenStack(TOKEN_NUMBER);

            // check if we are in an object or an array
            if (this.streamStoppedInAnArray()) {
              continue;
            } else if (this.streamStoppedInAnObjectNullValuePlaceholderStart()) {
              // pop `n`, `u`, `l`, `l`
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
              this.popMirrorTokenStack();
            }
            break;
          case TOKEN_COMMA:
            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              this.JSONContent += tokenSymbol;
              continue;
            }
            // in a object or a array, keep the comma in stack but not write it into JSONContent, until next token arrival
            this.pushByteIntoPaddingContent(tokenSymbol);
            this.pushTokenStack(token);
            break;
          case TOKEN_DOT:
            // write current token symbol to JSON content
            this.JSONContent += tokenSymbol;

            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              continue;
            }

            // use 0 for decimal part placeholder
            this.pushTokenStack(token);
            this.pushMirrorTokenStack(TOKEN_NUMBER_0);
            break;
          case TOKEN_SLASH:
            // escape character `\`, `/`
            if (this.streamStoppedWithLeadingEscapeCharacter()) {
              // push padding escape character `\` into JSON content
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();

              // write current token symbol to JSON content
              this.JSONContent += tokenSymbol;

              // pop `\` from stack
              this.popTokenStack();
              continue;
            } else if (this.streamStoppedInAString()) {
              this.JSONContent += tokenSymbol;
              continue;
            }
            break;
          case TOKEN_ESCAPE_CHARACTER:
            // TOKEN_ESCAPE_CHARACTER needs to be defined somewhere
            // double escape character `\`, `\`
            if (this.streamStoppedWithLeadingEscapeCharacter()) {
              // push padding escape character `\` into JSON content
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();

              // write current token symbol to JSON content
              this.JSONContent += tokenSymbol;

              // pop `\` from stack
              this.popTokenStack();
              continue;
            }

            // just write escape character into stack and waiting other token trigger escape method.
            this.pushTokenStack(token);
            this.pushByteIntoPaddingContent(TOKEN_ESCAPE_CHARACTER_SYMBOL); // TOKEN_ESCAPE_CHARACTER_SYMBOL needs to be defined somewhere
            break;
          case TOKEN_NEGATIVE:
            // TOKEN_NEGATIVE needs to be defined somewhere
            // in a string, just skip token
            if (this.streamStoppedInAString()) {
              this.JSONContent += tokenSymbol;
              continue;
            }

            // check if JSON stream stopped with padding content, like `[1 , -`
            if (this.havePaddingContent()) {
              this.appendPaddingContentToJSONContent();
              this.cleanPaddingContent();
            }

            // just write negative character into stack and wait for other token to trigger it.
            this.pushTokenStack(token);
            if (this.streamStoppedInAnObjectNegativeNumberValueStart()) {
              // pop `n`, `u`, `l`, `l` from mirror stack
              for (var i = 0; i < 4; i++) {
                // assuming "null" has been pushed into the stack as separate characters
                this.popMirrorTokenStack();
              }
            }

            // push `0` into mirror stack for placeholder
            this.pushMirrorTokenStack(TOKEN_NUMBER_0); // TOKEN_NUMBER_0 needs to be defined somewhere
            break;
          default:
            throw new Error(_concatInstanceProperty(_context5 = "unexpected token: `".concat(token, "`, token symbol: `")).call(_context5, tokenSymbol, "`"));
        }

        // check if end
        if (token === TOKEN_EOF) {
          break;
        }
      }
    }

    // Complete the incomplete JSON string by concat JSON content and mirror tokens
  }, {
    key: "CompleteJSON",
    value: function CompleteJSON() {
      return this.JSONContent + this.dumpMirrorTokenStackToString(); // Assuming an implementation of dumpMirrorTokenStackToString
    }
  }]);
  return Lexer;
}();

export { Lexer };
//# sourceMappingURL=index.esm.js.map
