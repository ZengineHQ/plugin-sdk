import { exists, isEmpty, isString, matchesRegex, isEmail } from '../../src/util/validation';

test('exists() correctly determines whether a value exists', () => {
  expect(exists(null)).toBe(false);
  expect(exists(undefined)).toBe(false);
  expect(exists(false)).toBe(true);
  expect(exists(0)).toBe(true);
  expect(exists('')).toBe(true);
});

test('isEmpty() correctly determines whether an array is empty', () => {
  expect(isEmpty([])).toBe(true);
  expect(isEmpty([1])).toBe(false);
});

test('isEmpty() correctly determines whether an object is empty', () => {
  expect(isEmpty({})).toBe(true);
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
  expect(matchesRegex(true, /regex/)).toBe(false);
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
  expect(isEmail(123)).toBe(false);
  expect(isEmail('')).toBe(false);
  expect(isEmail('not an email')).toBe(false);
  expect(isEmail('without@domain')).toBe(false);
  expect(isEmail('withoutat.com')).toBe(false);
  expect(isEmail('test@trivial.net')).toBe(true);
  expect(isEmail('test.foo.bar@trivial.net')).toBe(true);
});
