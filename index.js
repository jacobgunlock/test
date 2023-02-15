exports.capitalize = function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

exports.reverse = function reverse(word) {
    return word.split("").reverse().join("");
};

exports.calculator = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    },
};

exports.caeserCipher = function caeserCipher(string, shift = 0) {
    const array = string.split("");
    const cipher = [];
    array.forEach((letter) => {
        const char = letter.charCodeAt();
        if (64 < char && char < 91) {
            if (90 < char + shift) cipher.push(char + shift - 26);
            else if (64 < char + shift < 91) cipher.push(char + shift);
        } else if (96 < char && char < 123) {
            if (122 < char + shift) cipher.push(char + shift - 26);
            else if (96 < char + shift < 122) cipher.push(char + shift);
        } else cipher.push(char);
    });
    const word = [];
    cipher.forEach((code) => word.push(String.fromCharCode(code)));
    return word.join("");
};

exports.analyzeArray = function analyzeArray(array) {
    return {
        average: array.reduce((a, b) => a + b) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    };
};
