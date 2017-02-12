const sum = require('./sum');

test('1: pass', () => expect(sum(1, 2)).toBe(3))
test('2: fail', () => expect(sum(1, 2)).toBe(222222))
test('3: pass', () => expect(sum(1, 2)).toBe(3))
test('4: fail', () => expect(sum(1, 2)).toBe(444444))
