const reverseString = require('./reverseString');

test('reverse empty string', () => {
  expect(reverseString('')).toBe('');
});

test('reverse digit string', () => {
  expect(reverseString('1234')).toBe('4321');
});

test('reverse letter string', () => {
  expect(reverseString('asdf')).toBe('fdsa');
});

test('reverse mixed string', () => {
  expect(reverseString('1234qwer')).toBe('rewq4321');
});

test('reverse single char string', () => {
  expect(reverseString('1')).toBe('1');
});

// again, TS makes non string inputs irrelevant