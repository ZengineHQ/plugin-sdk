import getCountries from '../../src/util/getCountries';

test('Returns an array of countries in the expected format', () => {
  const countries = getCountries();
  expect(Array.isArray(countries)).toBeTruthy();
  expect(countries).toHaveProperty('length', 250);
  expect(typeof countries[0]).toEqual('object');
  expect(countries[0]).toHaveProperty('key', 'AF');
  expect(countries[0]).toHaveProperty('value', 'Afghanistan');
});
