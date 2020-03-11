import getFieldClasses from '../../src/util/getFieldClasses';

test('Adds a default class', () => {
  const classes = getFieldClasses({});
  expect(classes).toBe('form-control');
});

test('Adds custom classes', () => {
  const classes = getFieldClasses({}, 'foo');
  expect(classes).toBe('form-control foo');
});

test('Adds validation passed class when touched and valid', () => {
  const classes = getFieldClasses({ touched: true });
  expect(classes).toBe('form-control is-valid');
});

test('Adds validation failed class when touched and invalid', () => {
  const classes = getFieldClasses({ touched: true, error: { a: 1 } });
  expect(classes).toBe('form-control is-invalid');
});

test('Adds no validation class when not touched and valid', () => {
  const classes = getFieldClasses({ touched: false });
  expect(classes).toBe('form-control');
});

test('Adds no validation class when not touched and invalid', () => {
  const classes = getFieldClasses({ touched: false, error: { a: 1 } });
  expect(classes).toBe('form-control');
});
