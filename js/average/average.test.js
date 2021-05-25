
const average = require('./average')

test('sarasas is vieno', () => {
    expect(average([1])).toBe(1);
})
test('sarasas is keliu', () => {
    expect(average([1, 2, 5, 4])).toBe(3);
})
test('sarasas is keliu', () => {
    expect(average([1, 2, 5, 4])).toBe(3);
})