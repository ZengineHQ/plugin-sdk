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
  }));
};

export default getCountries;
