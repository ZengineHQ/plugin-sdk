import getCurrencies from '../../src/util/getCurrencies';

test('Returns an array of currencies in the expected format', () => {
  const currencies = getCurrencies();
  expect(Array.isArray(currencies)).toBeTruthy();
  expect(currencies).toHaveProperty('length', 171);
  expect(typeof currencies[0]).toEqual('object');
  expect(currencies[0]).toHaveProperty('key', 'ALL');
  expect(currencies[0]).toHaveProperty('value', 'Lek');
});
