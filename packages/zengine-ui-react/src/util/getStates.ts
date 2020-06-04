import { SelectOption } from '../atoms/Select';
import { CountryData } from './getCountries';
import data from '../data/states.json';

interface StateData {
  id: string
  state: string
  country: CountryData
}

const getStates = (includeCanada: boolean = false): SelectOption[] => {
  return data.filter((d: StateData) => includeCanada ? d : d.country.id === 'US')
    .map((d: StateData) => ({
      key: d.id,
      value: d.state,
    }));
};

export default getStates;
