const calculator = require('./calculator');

// add

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -1 + 2 to equal 1', () => {
  expect(calculator.add(-1, 2)).toBe(1);
});

test('adds 10 + 213 to equal 223', () => {
  expect(calculator.add(10, 213)).toBe(223);
});

test('adds -103 + 21 to equal -82', () => {
  expect(calculator.add(-103, 21)).toBe(-82);
});

// subtract

test('subtract 1 - 2 to equal -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('subtract -1 - 2 to equal -3', () => {
  expect(calculator.subtract(-1, 2)).toBe(-3);
});

test('subtract 300 - 215 to equal 85', () => {
  expect(calculator.subtract(300, 215)).toBe(85);
});

// multiply

test('subtract 300 * 215 to equal 64500', () => {
  expect(calculator.multiply(300, 215)).toBe(64500);
});

test('subtract 3.23 * 2.15 to equal 6.9445', () => {
  expect(calculator.multiply(3.23, 2.15)).toBe(6.9445);
});

// divide

test('subtract 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});