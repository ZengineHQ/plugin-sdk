import getStates from '../../src/util/getStates';

test('Returns an array of US states', () => {
  const states = getStates();
  expect(Array.isArray(states)).toBeTruthy();
  expect(states).toHaveProperty('length', 51);
  expect(typeof states[0]).toEqual('object');
  expect(states[0]).toHaveProperty('key', 'US-AL');
  expect(states[0]).toHaveProperty('value', 'Alabama');
});

test('Returns an array of US states + Canadian provinces if specified', () => {
  const states = getStates(true);
  expect(Array.isArray(states)).toBeTruthy();
  expect(states).toHaveProperty('length', 72);
  expect(typeof states[0]).toEqual('object');
  expect(states[0]).toHaveProperty('key', 'US-AL');
  expect(states[0]).toHaveProperty('value', 'Alabama');
  expect(states[60]).toHaveProperty('key', 'CA-NB');
  expect(states[60]).toHaveProperty('value', 'New Brunswick');
});
