import getStates from '../../src/util/getStates';

test('Returns an array of states', () => {
  const states = getStates();
  expect(Array.isArray(states)).toBeTruthy();
  expect(states).toHaveProperty('length', 51);
  expect(typeof states[0]).toEqual('object');
  expect(states[0]).toHaveProperty('key', 'AL');
  expect(states[0]).toHaveProperty('value', 'Alabama');
});
