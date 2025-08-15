import { caesarCipher } from './cesarCypher';

describe('testing the cipher', () => {
    test('last charachters', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('Upper and lower case', () => {
        expect(caesarCipher('xYz', 3)).toBe('aBc');
    });

    test('A formal sentence', () => {
        expect(caesarCipher('heLLo World', 3)).toBe('khOOr Zruog');
    });
});
