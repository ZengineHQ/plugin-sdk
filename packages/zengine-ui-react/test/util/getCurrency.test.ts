import getCurrency from '../../src/util/getCurrency';

test('Returns full currency data for a given id', () => {
  const currency = getCurrency('USD');
  expect(typeof currency).toEqual('object');
  expect(Array.isArray(currency)).toBeFalsy();
  expect(currency).toHaveProperty('currency', 'US Dollar');
  expect(currency).toHaveProperty('symbol', '$');
});
