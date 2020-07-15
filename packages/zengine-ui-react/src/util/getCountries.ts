import { SelectOption } from '../atoms/Select';

const data = require('../data/countries.json');

export interface CountryData {
  id: string
  country: string
}

const getCountries = (): SelectOption[] => {
  return data.map((d: CountryData) => ({
    key: d.id,
    value: d.country,
  })).sort((d1: SelectOption, d2: SelectOption) => {
    if (d1.value < d2.value) {
      return -1;
    }
    if (d1.value > d2.value) {
      return 1;
    }
    return 0;
  });
};

export default getCountries;
