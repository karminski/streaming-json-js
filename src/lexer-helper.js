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

function matchStack(stack, tokens) {
    let pointer = stack.length;
    let tokensLeft = tokens.length;

    while (true) {
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