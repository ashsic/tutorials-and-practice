const capitalize = require('./capitalize');

test('works on all lowercase string', () => {
  expect(capitalize('lowercase')).toBe('Lowercase');
});

test('works on empty string', () => {
  expect(capitalize('')).toBe('');
});

test('works on all uppercase string', () => {
  expect(capitalize('UPPERCASE')).toBe('UPPERCASE');
});

test('works on all digit string', () => {
  expect(capitalize('1234')).toBe('1234');
});

// no other relevant tests imo... maybe non string but TS solves this
// 'all lower/uppercase' is irrelevant, only first char is relevant anyways...