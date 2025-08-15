import { capitalize, reverseString, calculator } from './script';

describe('capitalize function', () => {
    test('return O', () => {
        expect(capitalize('ola Mundo')).toBe('O');
    });

    test('return C', () => {
        expect(capitalize('ei')).toBe('E');
    });

    test('retunr J', () => {
        expect(capitalize('juan')).toBe('J');
    });
});

describe('Reverse a String', () => {
    test('hola string', () => {
        expect(reverseString('hola')).toBe('aloh');
    });

    test('run away string', () => {
        expect(reverseString('run away')).toBe('yawa nur');
    });

    test('oso string', () => {
        expect(reverseString('oso')).toBe('oso');
    });
});

describe('calculator', () => {
    test('calculate 8 + 2', () => {
        expect(calculator(8, 2, 'sum')).toBe(10);
    });

    test('calculate 0 - 23', () => {
        expect(calculator(0, 23, 'subtract')).toBe(-23);
    });

    test('calculate 2 * 3', () => {
        expect(calculator(2, 3, 'multiply')).toBe(6);
    });

    test('calculate 9 / 3', () => {
        expect(calculator(9, 3, 'division')).toBe(3);
    });

    test('calculate 0 / 0', () => {
        expect(() => calculator(0, 0, 'division')).toThrow(
            new Error('not posible')
        );
    });
});
