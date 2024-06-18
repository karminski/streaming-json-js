class Lexer {
    constructor() {
        this.JSONContent = ""; // input JSON content
        this.PaddingContent = ""; // padding content for ignored characters and escape characters, etc.
        this.JSONSegment = ""; // appended JSON segment by the AppendString() method.
        this.TokenStack = []; // token stack for input JSON
        this.MirrorTokenStack = []; // token stack for auto-completed tokens
    }

    // Get token on the stack top
    getTopTokenOnStack() {
        if (this.TokenStack.length === 0) {
            return TOKEN_EOF;
        }
        return this.TokenStack[this.TokenStack.length - 1];
    }

    // Get token on the mirror stack top
    getTopTokenOnMirrorStack() {
        if (this.MirrorTokenStack.length === 0) {
            return TOKEN_EOF;
        }
        return this.MirrorTokenStack[this.MirrorTokenStack.length - 1];
    }

    // Pop token on the stack top
    popTokenStack() {
        if (this.TokenStack.length === 0) {
            return TOKEN_EOF;
        }
        return this.TokenStack.pop();
    }

    // Pop token on the mirror stack top
    popMirrorTokenStack() {
        if (this.MirrorTokenStack.length === 0) {
            return TOKEN_EOF;
        }
        return this.MirrorTokenStack.pop();
    }

    // Push token into the stack
    pushTokenStack(token) {
        this.TokenStack.push(token);
    }

    // Push token into the mirror stack
    pushMirrorTokenStack(token) {
        this.MirrorTokenStack.push(token);
    }

    // Convert mirror stack token into string
    dumpMirrorTokenStackToString() {
        return this.MirrorTokenStack.reduceRight((acc, token) => acc + tokenSymbolMap[token], "");
    }

    // Skip JSON segment by length n
    skipJSONSegment(n) {
        this.JSONSegment = this.JSONSegment.substring(n);
    }

    // Push negative symbol `-` into JSON content
    pushNegativeIntoJSONContent() {
        this.JSONContent += TOKEN_NEGATIVE_SYMBOL;
    }

    // Push byte into JSON content by given
    pushByteIntoPaddingContent(b) {
        this.PaddingContent += String.fromCharCode(b);
    }

    // Append padding content into JSON content
    appendPaddingContentToJSONContent() {
        this.JSONContent += this.PaddingContent;
    }

    // Check if padding content is empty
    havePaddingContent() {
        return this.PaddingContent.length > 0;
    }

    // Set padding content to empty
    cleanPaddingContent() {
        this.PaddingContent = "";
    }


    // lexer match JSON token method, convert JSON segment to JSON token
    matchToken() {
        // segment end
        if (this.JSONSegment.length === 0) {
          return [TOKEN_EOF, 0];
        }
        let tokenSymbol = this.JSONSegment.charCodeAt(0);
    
        // check if ignored token
        if (isIgnoreToken(tokenSymbol)) {
          this.skipJSONSegment(1);
          return [TOKEN_IGNORED, String.fromCharCode(tokenSymbol)];
        }
    
        // match token
        switch (tokenSymbol) {
          case TOKEN_LEFT_BRACKET_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_LEFT_BRACKET, String.fromCharCode(tokenSymbol)];
          case TOKEN_RIGHT_BRACKET_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_RIGHT_BRACKET, String.fromCharCode(tokenSymbol)];
          case TOKEN_LEFT_BRACE_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_LEFT_BRACE, String.fromCharCode(tokenSymbol)];
          case TOKEN_RIGHT_BRACE_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_RIGHT_BRACE, String.fromCharCode(tokenSymbol)];
          case TOKEN_COLON_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_COLON, String.fromCharCode(tokenSymbol)];
          case TOKEN_DOT_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_DOT, String.fromCharCode(tokenSymbol)];
          case TOKEN_COMMA_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_COMMA, String.fromCharCode(tokenSymbol)];
          case TOKEN_QUOTE_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_QUOTE, String.fromCharCode(tokenSymbol)];
          case TOKEN_ESCAPE_CHARACTER_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ESCAPE_CHARACTER, String.fromCharCode(tokenSymbol)];
          case TOKEN_SLASH_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_SLASH, String.fromCharCode(tokenSymbol)];
          case TOKEN_NEGATIVE_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NEGATIVE, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_A_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_A, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_B_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_B, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_C_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_C, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_D_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_D, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_E_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_E, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_F_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_F, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_L_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_L, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_N_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_N, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_R_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_R, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_S_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_S, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_T_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_T, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_LOWERCASE_U_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_LOWERCASE_U, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_UPPERCASE_A_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_UPPERCASE_A, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_UPPERCASE_B_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_UPPERCASE_B, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_UPPERCASE_C_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_UPPERCASE_C, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_UPPERCASE_D_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_UPPERCASE_D, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_UPPERCASE_E_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_UPPERCASE_E, String.fromCharCode(tokenSymbol)];
          case TOKEN_ALPHABET_UPPERCASE_F_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_ALPHABET_UPPERCASE_F, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_0_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_0, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_1_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_1, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_2_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_2, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_3_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_3, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_4_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_4, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_5_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_5, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_6_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_6, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_7_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_7, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_8_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_8, String.fromCharCode(tokenSymbol)];
          case TOKEN_NUMBER_9_SYMBOL:
            this.skipJSONSegment(1);
            return [TOKEN_NUMBER_9, String.fromCharCode(tokenSymbol)];
          default:
            this.skipJSONSegment(1);
            return [TOKEN_OTHERS, String.fromCharCode(tokenSymbol)];
        }
    }


    // append JSON string to current JSON stream content
    // this method will traversal all token and generate mirror token for complete full JSON
    appendJSONString(str) {
        this.JSONSegment = str;
        while (true) {
            let [token, tokenSymbol] = this.matchToken();

            switch (token) {
                case TOKEN_EOF:
                    // nothing to do with TOKEN_EOF
                    break;
                case TOKEN_IGNORED:
                    if (this.streamStoppedInAString()) {
                        this.JSONContent += String.fromCharCode(tokenSymbol);
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
                    this.JSONContent += String.fromCharCode(tokenSymbol);
                    break;

                case TOKEN_LEFT_BRACKET:
                    // check if JSON stream stopped with padding content
                    if (this.havePaddingContent()) {
                        this.appendPaddingContentToJSONContent();
                        this.cleanPaddingContent();
                    }
                    this.JSONContent += String.fromCharCode(tokenSymbol);
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
                        this.JSONContent += String.fromCharCode(tokenSymbol);
                        continue;
                    }

                    // check if JSON stream stopped with padding content
                    if (this.havePaddingContent()) {
                        this.appendPaddingContentToJSONContent();
                        this.cleanPaddingContent();
                    }

                    // write current token symbol to JSON content
                    this.JSONContent += String.fromCharCode(tokenSymbol);

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
                    this.JSONContent += String.fromCharCode(tokenSymbol);

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
                        this.JSONContent += String.fromCharCode(tokenSymbol);
                        continue;
                    }

                    // check if JSON stream stopped with padding content
                    if (this.havePaddingContent()) {
                        this.appendPaddingContentToJSONContent();
                        this.cleanPaddingContent();
                    }
                    this.JSONContent += String.fromCharCode(tokenSymbol);

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
                        this.JSONContent.push(tokenSymbol);

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
                    this.JSONContent.push(tokenSymbol);
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
                        throw new Error("invalid quote token in json stream");
                    }
                case TOKEN_QUOTE:
                    // check if escape quote `\"`
                    if (this.streamStoppedWithLeadingEscapeCharacter()) {
                        // push padding escape character `\` into JSON content
                        this.appendPaddingContentToJSONContent();
                        this.cleanPaddingContent();

                        // write current token symbol to JSON content
                        this.JSONContent.push(tokenSymbol);

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
                    this.JSONContent.push(tokenSymbol);
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
                        throw new Error("invalid quote token in json stream");
                    }
                case TOKEN_QUOTE:
                    // check if escape quote `\"`
                    if (this.streamStoppedWithLeadingEscapeCharacter()) {
                        // push padding escape character `\` into JSON content
                        this.appendPaddingContentToJSONContent();
                        this.cleanPaddingContent();

                        // write current token symbol to JSON content
                        this.JSONContent.push(tokenSymbol);
    
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
                    this.JSONContent.push(tokenSymbol);
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
                        throw new Error("invalid quote token in json stream");
                    }
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
                        this.JSONContent.push(tokenSymbol);
                        
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
                    this.JSONContent.push(tokenSymbol);

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
                        this.JSONContent.push(tokenSymbol);
                            
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
                    this.JSONContent.push(tokenSymbol);
    
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
                    const itIsPartOfTokenFalse = () => {
                        const left = [TOKEN_ALPHABET_LOWERCASE_F, TOKEN_ALPHABET_LOWERCASE_A];
                        const right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_S, TOKEN_ALPHABET_LOWERCASE_L];
                        return matchStack(this.TokenStack, left) && matchStack(this.MirrorTokenStack, right);
                    };
    
                    const itIsPartOfTokenNull1 = () => {
                        const left = [TOKEN_ALPHABET_LOWERCASE_N, TOKEN_ALPHABET_LOWERCASE_U];
                        const right = [TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L];
                        return matchStack(this.TokenStack, left) && matchStack(this.MirrorTokenStack, right);
                    };
    
                    const itIsPartOfTokenNull2 = () => {
                        const left = [TOKEN_ALPHABET_LOWERCASE_N, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_L];
                        const right = [TOKEN_ALPHABET_LOWERCASE_L];
                        return matchStack(this.TokenStack, left) && matchStack(this.MirrorTokenStack, right);
                    };
    
                    if (!itIsPartOfTokenFalse() && !itAllIsPartOfTokenNull1() && !itIsPartOfTokenNull2()) {
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
                    this.JSONContent.push(tokenSymbol);
              
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
                    this.JSONContent.push(tokenSymbol);
              
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
                      this.JSONContent.push(tokenSymbol);
              
                      // pop `\` from stack
                      this.popTokenStack();
                      continue;
                    }
              
                    // write current token symbol to JSON content
                    this.JSONContent.push(tokenSymbol);
              
                    // in a string, just skip token
                    if (this.streamStoppedInAString()) {
                      continue;
                    }
              
                    // check if `t` in token stack and `r`, `u`, `e` in mirror stack
                    const itIsPartOfTokenTrue = () => {
                      const left = [TOKEN_ALPHABET_LOWERCASE_T];
                      const right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_U, TOKEN_ALPHABET_LOWERCASE_R];
                      return matchStack(this.TokenStack, left) && matchStack(this.MirrorTokenStack, right);
                    };
              
                    if (!itIsPartOfTokenTrue()) {
                      continue;
                    }
              
                    this.pushTokenStack(token);
                    this.popMirrorTokenStack();
                    break;
                case TOKEN_ALPHABET_LOWERCASE_S:
                    // write current token symbol to JSON content
                    this.JSONContent.push(tokenSymbol);
    
                    // in a string, just skip token
                    if (this.streamStoppedInAString()) {
                        continue;
                    }
    
                    // check if `f`, `a`, `l` in token stack and `s`, `e in mirror stack
                    const itIsPartOfTokenFalse2 = () => {
                        let left = [
                            TOKEN_ALPHABET_LOWERCASE_F,
                            TOKEN_ALPHABET_LOWERCASE_A,
                            TOKEN_ALPHABET_LOWERCASE_L,
                        ];
                        let right = [
                            TOKEN_ALPHABET_LOWERCASE_E,
                            TOKEN_ALPHABET_LOWERCASE_S,
                        ];
                        return matchStack(this.TokenStack, left) && matchStack(this.MirrorTokenStack, right);
                    }
                    if (!itIsPartOfTokenFalse2()) {
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
                    const itIsPartOfTokenTrue2 = () => {
                        const left = [TOKEN_ALPHABET_LOWERCASE_T, TOKEN_ALPHABET_LOWERCASE_R];
                        const right = [TOKEN_ALPHABET_LOWERCASE_E, TOKEN_ALPHABET_LOWERCASE_U];
                        return matchStack(this.TokenStack, left) && matchStack(this.MirrorTokenStack, right);
                    };
                        
                    // check if `n` in token stack and `u`, `l`, `l` in mirror stack
                    const itIsPartOfTokenNull = () => {
                        const left = [TOKEN_ALPHABET_LOWERCASE_N];
                        const right = [TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_L, TOKEN_ALPHABET_LOWERCASE_U];
                        return matchStack(this.TokenStack, left) && matchStack(this.MirrorTokenStack, right);
                    };
                    if (!itIsPartOfTokenTrue2() && !itIsPartOfTokenNull()) {
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
                    this.JSONContent.push(tokenSymbol);
              
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
                        if (this.PaddingContent.length == 6) {
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
                        this.popMirrorTokenMatchStack();
                        this.popMirrorTokenMatchStack();
                        this.popMirrorTokenMatchStack();
                    }
                    break;
                case TOKEN_COMMA:
                    // in a string, just skip token
                    if (this.streamStoppedInAString()) {
                        this.JSONContent.push(tokenSymbol);
                        continue;
                    }
                    // in a object or a array, keep the comma in stack but not write it into JSONContent, until next token arrival
                    this.pushByteIntoPaddingContent(tokenSymbol);
                    this.pushTokenStack(token);
                    break;
                case TOKEN_DOT:
                    // write current token symbol to JSON content
                    this.JSONContent.push(tokenSymbol);
                        
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
                        this.JSONContent.push(tokenSymbol);
                            
                        // pop `\` from stack
                        this.popTokenStack();
                        continue;
                    }
                    break;
                case TOKEN_ESCAPE_CHARACTER: // TOKEN_ESCAPE_CHARACTER needs to be defined somewhere
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
                case TOKEN_NEGATIVE: // TOKEN_NEGATIVE needs to be defined somewhere
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
                        for (let i = 0; i < 4; i++) { // assuming "null" has been pushed into the stack as separate characters
                            this.popMirrorTokenStack();
                        }
                    }

                    // push `0` into mirror stack for placeholder
                    this.pushMirrorTokenStack(TOKEN_NUMBER_0); // TOKEN_NUMBER_0 needs to be defined somewhere
                    break;
                default:
                    throw new Error(`unexpected token: \`${token}\`, token symbol: \`${String.fromCharCode(tokenSymbol)}\``);
            }

            // check if end
            if (token === TOKEN_EOF) {
                break;
            }
        }
    }

    // Complete the incomplete JSON string
  CompleteJSON() {
    return this.completeJSON();
  }

  // Complete the incomplete JSON string by concat JSON content and mirror tokens
  completeJSON() {
    return this.JSONContent.join('') + this.dumpMirrorTokenStackToString(); // Assuming an implementation of dumpMirrorTokenStackToString
  }
}
