function caesarCipher(string, key) {
    const encypted = [];

    for (let i = 0; i < string.length; i++) {
        let cipher = string.codePointAt(i) + key;

        if (cipher > 122) {
            cipher = cipher - 122 + 96;
        } else if (cipher > 90 && cipher < 97) {
            cipher = cipher - 90 + 64;
        } else if (cipher - 3 === 32) cipher = 32;

        encypted.push(String.fromCharCode(cipher));
    }

    return encypted.join('');
}

export { caesarCipher };
