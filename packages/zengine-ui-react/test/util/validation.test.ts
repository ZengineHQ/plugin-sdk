import {
  exists,
  isEmpty,
  isString,
  matchesRegex,
  isEmail,
  maxLength,
  minLength,
  maxWordCount,
  minWordCount,
  alpha,
  alphaNumeric,
  numeric,
  zipCode,
} from '../../src/util/validation';

test('exists() correctly determines whether a value exists', () => {
  expect(exists(null)).toBe(false);
  expect(exists(undefined)).toBe(false);
  expect(exists(false)).toBe(true);
  expect(exists(0)).toBe(true);
  expect(exists('')).toBe(true);
  expect(exists({})).toBe(true);
  expect(exists([])).toBe(true);
});

test('isEmpty() correctly determines whether an array is empty', () => {
  expect(isEmpty([])).toBe(true);
  expect(isEmpty([1])).toBe(false);
});

test('isEmpty() correctly determines whether an object is empty', () => {
  expect(isEmpty({})).toBe(true);
  expect(isEmpty({ a: undefined })).toBe(false);
  expect(isEmpty({ a: 1 })).toBe(false);
});

test('isEmpty() correctly determines whether a string is empty', () => {
  expect(isEmpty('')).toBe(true);
});

test('isEmpty() falls back to exists() for other variable types', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty(false)).toBe(false);
  expect(isEmpty(0)).toBe(false);
});

test('isString() correctly determines whether a value is a string', () => {
  expect(isString('')).toBe(true);
  expect(isString({})).toBe(false);
  expect(isString([])).toBe(false);
  expect(isString(1)).toBe(false);
});

test('matchesRegex() returns false if value is not a string', () => {
  expect(matchesRegex(123 as any, /regex/)).toBe(false);
});

test('matchesRegex() correctly determines whether values match a regular expression', () => {
  expect(matchesRegex('hello@123', /[a-z]+@[0-9]+/)).toBe(true);
  expect(matchesRegex('hello123', /[a-z]+@[0-9]+/)).toBe(false);
});

test('matchesRegex() accepts a RegExp object as the regex param', () => {
  const regexp = new RegExp(/[a-z]+@[0-9]+/);
  expect(matchesRegex('hello@123', regexp)).toBe(true);
  expect(matchesRegex('hello123', regexp)).toBe(false);
});

test('isEmail() correctly determines whether a value is an email address', () => {
  expect(isEmail(123 as any)).toBe(false);
  expect(isEmail('')).toBe(false);
  expect(isEmail('not an email')).toBe(false);
  expect(isEmail('without@domain')).toBe(false);
  expect(isEmail('withoutat.com')).toBe(false);
  expect(isEmail('test@contrived.net')).toBe(true);
  expect(isEmail('test.foo.bar@trivial.net')).toBe(true);
});

test('maxLength() correctly determines whether a string adheres to a maximum length', () => {
  expect(maxLength(123 as any, 123)).toBe(false);
  expect(maxLength('hello', 3)).toBe(false);
  expect(maxLength('hello', 5)).toBe(true);
});

test('minLength() correctly determines whether a string adheres to a maximum length', () => {
  expect(minLength(123 as any, 123)).toBe(false);
  expect(minLength('oi', 3)).toBe(false);
  expect(minLength('oi', 2)).toBe(true);
  expect(minLength('hello', 5)).toBe(true);
});

test('maxWordCount() correctly determines whether a string adheres to a maximum length', () => {
  expect(maxWordCount('hello there foo bar', 3)).toBe(false);
  expect(maxWordCount('hello there foo', 3)).toBe(true);
});

test('minWordCount() correctly determines whether a string adheres to a maximum length', () => {
  expect(minWordCount('hello there', 3)).toBe(false);
  expect(minWordCount('hello there foo', 3)).toBe(true);
});

test('alpha() correctly determines whether a string only contains alphabetic characters', () => {
  expect(alpha('hello 123 there')).toBe(false);
  expect(alpha('hellothere')).toBe(true);
  expect(alpha('hello123')).toBe(false);
  expect(alpha('HELLOthere')).toBe(true);
  expect(alpha('HELLO there')).toBe(false);
});

test('alpha() optionally allows spaces', () => {
  expect(alpha('hello 123', true)).toBe(false);
  expect(alpha('hello there', true)).toBe(true);
});

test('alphaNumeric() correctly determines whether a string only contains alphabetic and numeric characters', () => {
  expect(alphaNumeric('hello123there')).toBe(true);
  expect(alphaNumeric('HELLOthere1')).toBe(true);
  expect(alphaNumeric('hellOthere')).toBe(true);
  expect(alphaNumeric('hellothere23{}')).toBe(false);
  expect(alphaNumeric('hellothere!')).toBe(false);
});

test('alphaNumeric() optionally allows spaces', () => {
  expect(alphaNumeric('hello 123 there', true)).toBe(true);
});

test('numeric() correctly determines whether a number is, well, numeric', () => {
  expect(numeric(123)).toBe(true);
  expect(numeric(123.45)).toBe(true);
});

test('numeric() correctly determines whether a string only contains numeric characters', () => {
  expect(numeric('hello 123 there')).toBe(false);
  expect(numeric('123')).toBe(true);
  expect(numeric('123 456')).toBe(false);
  expect(numeric('123.456')).toBe(true);
  expect(numeric('123!')).toBe(false);
});

test('zipCode() correctly determines whether a string is a valid US zip code', () => {
  expect(zipCode('hello 123 there')).toBe(false);
  expect(zipCode('9021')).toBe(false);
  expect(zipCode('90210')).toBe(true);
  expect(zipCode('902101')).toBe(false);
});
