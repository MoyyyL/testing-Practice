function capitalize(string) {
    let char = string.charAt(0);
    return char.toUpperCase();
}

function reverseString(string) {
    const reverse = [];

    for (let i = string.length - 1; i >= 0; i--) {
        reverse.push(string.charAt(i));
    }

    return reverse.join('');
}

function calculator(a, b, operation) {
    switch (operation) {
        case 'sum':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'division':
            if (b === 0) throw new Error('not posible');
            else return a / b;
        default:
            return new Error('not basic operation');
    }
}

export { capitalize, reverseString, calculator };
