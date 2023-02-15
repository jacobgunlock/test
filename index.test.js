const index = require("./index");
const capitalize = index.capitalize;
const reverse = index.reverse;
const calculator = index.calculator;
const caeserCipher = index.caeserCipher;
const analyzeArray = index.analyzeArray;

test("first letter is capitalized", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("reverse word", () => {
    expect(reverse("hello")).toBe("olleh");
});

test("calc add", () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test("calc subtract", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test("calc multiply", () => {
    expect(calculator.multiply(3, 3)).toBe(9);
});

test("calc divide", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test("cipher no wrap", () => {
    expect(caeserCipher("ABC", 2)).toBe("CDE");
});

test("cipher wrap", () => {
    expect(caeserCipher("XYZ", 3)).toBe("ABC");
});

test("cipher case insensitive", () => {
    expect(caeserCipher("AbCdE", 5)).toBe("FgHiJ");
});

test("cipher ignore punctuation/whitespace", () => {
    expect(caeserCipher("hey. whats up", 1)).toBe("ifz. xibut vq");
});

test("analyze array average", () => {
    expect(analyzeArray([1, 4, 74, 35, 9, 54]).average).toBe(29.5);
});

test("analyze array min", () => {
    expect(analyzeArray([1, 4, 74, 35, 9, 54]).min).toBe(1);
});

test("analyze array max", () => {
    expect(analyzeArray([1, 4, 74, 35, 9, 54]).max).toBe(74);
});

test("analyze array length", () => {
    expect(analyzeArray([1, 4, 74, 35, 9, 54]).length).toBe(6);
});
