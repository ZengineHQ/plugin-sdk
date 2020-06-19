import { SelectOption } from '../atoms/Select';
import { CurrencyData } from './getCurrency';

const data = require('../data/currencies.json');

// Returns an array of currencies formatted for a Select molecule option.
const getCurrencies = (): SelectOption[] => {
  return data.map((d: CurrencyData) => ({
    key: d.id,
    value: d.currency,
  }));
};

export default getCurrencies;
