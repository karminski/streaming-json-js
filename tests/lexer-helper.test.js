// test match stack method.
describe('matchStack tests', () => {
    test('matchStack0 - should match', () => {
        const stack = [TOKEN_LEFT_BRACE];
        const tokens = [TOKEN_LEFT_BRACE];

        const matchResult = matchStack(stack, tokens);
        expect(matchResult).toBe(true);
    });

    test('matchStack1 - should match', () => {
        const stack = [
            TOKEN_RIGHT_BRACE,
            TOKEN_ALPHABET_LOWERCASE_L,
            TOKEN_ALPHABET_LOWERCASE_L,
            TOKEN_ALPHABET_LOWERCASE_U,
            TOKEN_ALPHABET_LOWERCASE_N,
            TOKEN_COLON,
        ];
        const tokens = [
            TOKEN_RIGHT_BRACE,
            TOKEN_ALPHABET_LOWERCASE_L,
            TOKEN_ALPHABET_LOWERCASE_L,
            TOKEN_ALPHABET_LOWERCASE_U,
            TOKEN_ALPHABET_LOWERCASE_N,
            TOKEN_COLON,
        ];

        const matchResult = matchStack(stack, tokens);
        expect(matchResult).toBe(true);
    });

    test('matchStack2 - should match', () => {
        const stack = [
            TOKEN_LEFT_BRACE,
            TOKEN_QUOTE,
            TOKEN_QUOTE,
            TOKEN_COLON,
            TOKEN_ALPHABET_LOWERCASE_N,
            TOKEN_ALPHABET_LOWERCASE_U,
        ];
        const tokens = [
            TOKEN_ALPHABET_LOWERCASE_N,
            TOKEN_ALPHABET_LOWERCASE_U,
        ];

        const matchResult = matchStack(stack, tokens);
        expect(matchResult).toBe(true);
    });
});
