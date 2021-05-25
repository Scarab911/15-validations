const fullName = require('./fullName');


test('Correct fullname', () => {
    expect(fullName(`Vardenis`, `Pavardenis`)).toBe('Vardenis Pavardenis');
});
test('Error without first name', () => {
    expect(fullName('', `Pavardenis`)).toBe(false);
});
test('error without lastname', () => {
    expect(fullName('Vardenis', '')).toBe(false);
});

test('fix firstname with spaces around', () => {
    expect(fullName(' Vardenis', 'Pavardenis')).toBe(false);
});

test('fix firstname with spaces around', () => {
    expect(fullName('Vardenis ', 'Pavardenis')).toBe(false);
});

test('fix firstname with spaces around', () => {
    expect(fullName('     Vardenis', 'Pavardenis')).toBe(false);
});

test('fix firstname with spaces around', () => {
    expect(fullName('Vardenis     ', 'Pavardenis')).toBe(false);
});

test('fix lastname with spaces around', () => {
    expect(fullName('Vardenis', ' Pavardenis')).toBe(false);
});

test('fix lastname with spaces around', () => {
    expect(fullName('Vardenis', 'Pavardenis ')).toBe(false);
});

test('fix lastname with spaces around', () => {
    expect(fullName('Vardenis', '    Pavardenis')).toBe(false);
});

test('fix lastname with spaces around', () => {
    expect(fullName('Vardenis', 'Pavardenis     ')).toBe(false);
});
test('firstName is too short', () => {
    expect(fullName('V', 'Pavardenis')).toBe(false);
});
test('lastName is too short', () => {
    expect(fullName('Vardenis', 'P')).toBe(false);
});