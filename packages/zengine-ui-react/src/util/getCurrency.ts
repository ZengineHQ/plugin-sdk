const data = require('../data/currencies.json');

export interface CurrencyData {
  id: string
  currency: string
  symbol: string
  decimals: number
}

// Returns full data for a single currency id.
const getCurrency = (id: string): CurrencyData => {
  return data.filter((d: CurrencyData) => d.id === id)[0];
}

export default getCurrency;
