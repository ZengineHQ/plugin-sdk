/**
 * this map holds all the supported currencies in Zengine
 */
export const currencies: {
  [key: string]: {
    id: string,
    currency: string,
    symbol: string,
    decimals: number | null
  }
} = { 'ALL': { 'id': 'ALL', 'currency': 'Lek', 'symbol': 'ALL', 'decimals': 2 }, 'DZD': { 'id': 'DZD', 'currency': 'Algerian Dinar', 'symbol': 'DZD', 'decimals': 2 }, 'ARS': { 'id': 'ARS', 'currency': 'Argentine Peso', 'symbol': '$', 'decimals': 2 }, 'AUD': { 'id': 'AUD', 'currency': 'Australian Dollar', 'symbol': '$', 'decimals': 2 }, 'BSD': { 'id': 'BSD', 'currency': 'Bahamian Dollar', 'symbol': '$', 'decimals': 2 }, 'BHD': { 'id': 'BHD', 'currency': 'Bahraini Dinar', 'symbol': 'BHD', 'decimals': 3 }, 'BDT': { 'id': 'BDT', 'currency': 'Taka', 'symbol': 'BDT', 'decimals': 2 }, 'AMD': { 'id': 'AMD', 'currency': 'Armenian Dram', 'symbol': 'AMD', 'decimals': 2 }, 'BBD': { 'id': 'BBD', 'currency': 'Barbados Dollar', 'symbol': '$', 'decimals': 2 }, 'BMD': { 'id': 'BMD', 'currency': 'Bermudian Dollar', 'symbol': '$', 'decimals': 2 }, 'BTN': { 'id': 'BTN', 'currency': 'Ngultrum', 'symbol': 'BTN', 'decimals': 2 }, 'BOB': { 'id': 'BOB', 'currency': 'Boliviano', 'symbol': 'BOB', 'decimals': 2 }, 'BWP': { 'id': 'BWP', 'currency': 'Pula', 'symbol': 'BWP', 'decimals': 2 }, 'BZD': { 'id': 'BZD', 'currency': 'Belize Dollar', 'symbol': '$', 'decimals': 2 }, 'SBD': { 'id': 'SBD', 'currency': 'Solomon Islands Dollar', 'symbol': '$', 'decimals': 2 }, 'BND': { 'id': 'BND', 'currency': 'Brunei Dollar', 'symbol': '$', 'decimals': 2 }, 'MMK': { 'id': 'MMK', 'currency': 'Kyat', 'symbol': 'MMK', 'decimals': 2 }, 'BIF': { 'id': 'BIF', 'currency': 'Burundi Franc', 'symbol': 'BIF', 'decimals': 0 }, 'KHR': { 'id': 'KHR', 'currency': 'Riel', 'symbol': 'KHR', 'decimals': 2 }, 'CAD': { 'id': 'CAD', 'currency': 'Canadian Dollar', 'symbol': '$', 'decimals': 2 }, 'CVE': { 'id': 'CVE', 'currency': 'Cabo Verde Escudo', 'symbol': 'CVE', 'decimals': 2 }, 'KYD': { 'id': 'KYD', 'currency': 'Cayman Islands Dollar', 'symbol': '$', 'decimals': 2 }, 'LKR': { 'id': 'LKR', 'currency': 'Sri Lanka Rupee', 'symbol': 'LKR', 'decimals': 2 }, 'CLP': { 'id': 'CLP', 'currency': 'Chilean Peso', 'symbol': '$', 'decimals': 0 }, 'CNY': { 'id': 'CNY', 'currency': 'Yuan Renminbi', 'symbol': '¥', 'decimals': 2 }, 'COP': { 'id': 'COP', 'currency': 'Colombian Peso', 'symbol': '$', 'decimals': 2 }, 'KMF': { 'id': 'KMF', 'currency': 'Comoro Franc', 'symbol': 'KMF', 'decimals': 0 }, 'CRC': { 'id': 'CRC', 'currency': 'Costa Rican Colon', 'symbol': 'CRC', 'decimals': 2 }, 'HRK': { 'id': 'HRK', 'currency': 'Kuna', 'symbol': 'HRK', 'decimals': 2 }, 'CUP': { 'id': 'CUP', 'currency': 'Cuban Peso', 'symbol': '₱', 'decimals': 2 }, 'CZK': { 'id': 'CZK', 'currency': 'Czech Koruna', 'symbol': 'CZK', 'decimals': 2 }, 'DKK': { 'id': 'DKK', 'currency': 'Danish Krone', 'symbol': 'DKK', 'decimals': 2 }, 'DOP': { 'id': 'DOP', 'currency': 'Dominican Peso', 'symbol': '$', 'decimals': 2 }, 'SVC': { 'id': 'SVC', 'currency': 'El Salvador Colon', 'symbol': 'SVC', 'decimals': 2 }, 'ETB': { 'id': 'ETB', 'currency': 'Ethiopian Birr', 'symbol': 'ETB', 'decimals': 2 }, 'ERN': { 'id': 'ERN', 'currency': 'Nakfa', 'symbol': 'ERN', 'decimals': 2 }, 'FKP': { 'id': 'FKP', 'currency': 'Falkland Islands Pound', 'symbol': '£', 'decimals': 2 }, 'FJD': { 'id': 'FJD', 'currency': 'Fiji Dollar', 'symbol': '$', 'decimals': 2 }, 'DJF': { 'id': 'DJF', 'currency': 'Djibouti Franc', 'symbol': 'DJF', 'decimals': 0 }, 'GMD': { 'id': 'GMD', 'currency': 'Dalasi', 'symbol': 'GMD', 'decimals': 2 }, 'GIP': { 'id': 'GIP', 'currency': 'Gibraltar Pound', 'symbol': '£', 'decimals': 2 }, 'GTQ': { 'id': 'GTQ', 'currency': 'Quetzal', 'symbol': 'GTQ', 'decimals': 2 }, 'GNF': { 'id': 'GNF', 'currency': 'Guinea Franc', 'symbol': 'GNF', 'decimals': 0 }, 'GYD': { 'id': 'GYD', 'currency': 'Guyana Dollar', 'symbol': '$', 'decimals': 2 }, 'HTG': { 'id': 'HTG', 'currency': 'Gourde', 'symbol': 'HTG', 'decimals': 2 }, 'HNL': { 'id': 'HNL', 'currency': 'Lempira', 'symbol': 'HNL', 'decimals': 2 }, 'HKD': { 'id': 'HKD', 'currency': 'Hong Kong Dollar', 'symbol': '$', 'decimals': 2 }, 'HUF': { 'id': 'HUF', 'currency': 'Forint', 'symbol': 'HUF', 'decimals': 2 }, 'ISK': { 'id': 'ISK', 'currency': 'Iceland Krona', 'symbol': 'ISK', 'decimals': 0 }, 'INR': { 'id': 'INR', 'currency': 'Indian Rupee', 'symbol': 'INR', 'decimals': 2 }, 'IDR': { 'id': 'IDR', 'currency': 'Rupiah', 'symbol': 'IDR', 'decimals': 2 }, 'IRR': { 'id': 'IRR', 'currency': 'Iranian Rial', 'symbol': 'IRR', 'decimals': 2 }, 'IQD': { 'id': 'IQD', 'currency': 'Iraqi Dinar', 'symbol': 'IQD', 'decimals': 3 }, 'ILS': { 'id': 'ILS', 'currency': 'New Israeli Sheqel', 'symbol': 'ILS', 'decimals': 2 }, 'JMD': { 'id': 'JMD', 'currency': 'Jamaican Dollar', 'symbol': '$', 'decimals': 2 }, 'JPY': { 'id': 'JPY', 'currency': 'Yen', 'symbol': '¥', 'decimals': 0 }, 'KZT': { 'id': 'KZT', 'currency': 'Tenge', 'symbol': 'KZT', 'decimals': 2 }, 'JOD': { 'id': 'JOD', 'currency': 'Jordanian Dinar', 'symbol': 'JOD', 'decimals': 3 }, 'KES': { 'id': 'KES', 'currency': 'Kenyan Shilling', 'symbol': 'KES', 'decimals': 2 }, 'KPW': { 'id': 'KPW', 'currency': 'North Korean Won', 'symbol': '₩', 'decimals': 2 }, 'KRW': { 'id': 'KRW', 'currency': 'Won', 'symbol': '₩', 'decimals': 0 }, 'KWD': { 'id': 'KWD', 'currency': 'Kuwaiti Dinar', 'symbol': 'KWD', 'decimals': 3 }, 'KGS': { 'id': 'KGS', 'currency': 'Som', 'symbol': 'KGS', 'decimals': 2 }, 'LAK': { 'id': 'LAK', 'currency': 'Kip', 'symbol': 'LAK', 'decimals': 2 }, 'LBP': { 'id': 'LBP', 'currency': 'Lebanese Pound', 'symbol': '£', 'decimals': 2 }, 'LSL': { 'id': 'LSL', 'currency': 'Loti', 'symbol': 'LSL', 'decimals': 2 }, 'LRD': { 'id': 'LRD', 'currency': 'Liberian Dollar', 'symbol': '$', 'decimals': 2 }, 'LYD': { 'id': 'LYD', 'currency': 'Libyan Dinar', 'symbol': 'LYD', 'decimals': 3 }, 'MOP': { 'id': 'MOP', 'currency': 'Pataca', 'symbol': 'MOP', 'decimals': 2 }, 'MWK': { 'id': 'MWK', 'currency': 'Malawi Kwacha', 'symbol': 'MWK', 'decimals': 2 }, 'MYR': { 'id': 'MYR', 'currency': 'Malaysian Ringgit', 'symbol': 'MYR', 'decimals': 2 }, 'MVR': { 'id': 'MVR', 'currency': 'Rufiyaa', 'symbol': 'MVR', 'decimals': 2 }, 'MRO': { 'id': 'MRO', 'currency': 'Ouguiya', 'symbol': 'MRO', 'decimals': 2 }, 'MUR': { 'id': 'MUR', 'currency': 'Mauritius Rupee', 'symbol': 'MUR', 'decimals': 2 }, 'MXN': { 'id': 'MXN', 'currency': 'Mexican Peso', 'symbol': '$', 'decimals': 2 }, 'MNT': { 'id': 'MNT', 'currency': 'Tugrik', 'symbol': 'MNT', 'decimals': 2 }, 'MDL': { 'id': 'MDL', 'currency': 'Moldovan Leu', 'symbol': 'MDL', 'decimals': 2 }, 'MAD': { 'id': 'MAD', 'currency': 'Moroccan Dirham', 'symbol': 'MAD', 'decimals': 2 }, 'OMR': { 'id': 'OMR', 'currency': 'Rial Omani', 'symbol': 'OMR', 'decimals': 3 }, 'NAD': { 'id': 'NAD', 'currency': 'Namibia Dollar', 'symbol': '$', 'decimals': 2 }, 'NPR': { 'id': 'NPR', 'currency': 'Nepalese Rupee', 'symbol': 'NPR', 'decimals': 2 }, 'ANG': { 'id': 'ANG', 'currency': 'Netherlands Antillean Guilder', 'symbol': 'ANG', 'decimals': 2 }, 'AWG': { 'id': 'AWG', 'currency': 'Aruban Florin', 'symbol': 'AWG', 'decimals': 2 }, 'VUV': { 'id': 'VUV', 'currency': 'Vatu', 'symbol': 'VUV', 'decimals': 0 }, 'NZD': { 'id': 'NZD', 'currency': 'New Zealand Dollar', 'symbol': '$', 'decimals': 2 }, 'NIO': { 'id': 'NIO', 'currency': 'Cordoba Oro', 'symbol': 'NIO', 'decimals': 2 }, 'NGN': { 'id': 'NGN', 'currency': 'Naira', 'symbol': 'NGN', 'decimals': 2 }, 'NOK': { 'id': 'NOK', 'currency': 'Norwegian Krone', 'symbol': 'NOK', 'decimals': 2 }, 'PKR': { 'id': 'PKR', 'currency': 'Pakistan Rupee', 'symbol': 'PKR', 'decimals': 2 }, 'PAB': { 'id': 'PAB', 'currency': 'Balboa', 'symbol': 'PAB', 'decimals': 2 }, 'PGK': { 'id': 'PGK', 'currency': 'Kina', 'symbol': 'PGK', 'decimals': 2 }, 'PYG': { 'id': 'PYG', 'currency': 'Guarani', 'symbol': 'PYG', 'decimals': 0 }, 'PEN': { 'id': 'PEN', 'currency': 'Sol', 'symbol': 'PEN', 'decimals': 2 }, 'PHP': { 'id': 'PHP', 'currency': 'Philippine Peso', 'symbol': '₱', 'decimals': 2 }, 'QAR': { 'id': 'QAR', 'currency': 'Qatari Rial', 'symbol': 'QAR', 'decimals': 2 }, 'RUB': { 'id': 'RUB', 'currency': 'Russian Ruble', 'symbol': 'RUB', 'decimals': 2 }, 'RWF': { 'id': 'RWF', 'currency': 'Rwanda Franc', 'symbol': 'RWF', 'decimals': 0 }, 'SHP': { 'id': 'SHP', 'currency': 'Saint Helena Pound', 'symbol': '£', 'decimals': 2 }, 'STD': { 'id': 'STD', 'currency': 'Dobra', 'symbol': 'STD', 'decimals': 2 }, 'SAR': { 'id': 'SAR', 'currency': 'Saudi Riyal', 'symbol': 'SAR', 'decimals': 2 }, 'SCR': { 'id': 'SCR', 'currency': 'Seychelles Rupee', 'symbol': 'SCR', 'decimals': 2 }, 'SLL': { 'id': 'SLL', 'currency': 'Leone', 'symbol': 'SLL', 'decimals': 2 }, 'SGD': { 'id': 'SGD', 'currency': 'Singapore Dollar', 'symbol': '$', 'decimals': 2 }, 'VND': { 'id': 'VND', 'currency': 'Dong', 'symbol': 'VND', 'decimals': 0 }, 'SOS': { 'id': 'SOS', 'currency': 'Somali Shilling', 'symbol': 'SOS', 'decimals': 2 }, 'ZAR': { 'id': 'ZAR', 'currency': 'Rand', 'symbol': 'ZAR', 'decimals': 2 }, 'SSP': { 'id': 'SSP', 'currency': 'South Sudanese Pound', 'symbol': '£', 'decimals': 2 }, 'SZL': { 'id': 'SZL', 'currency': 'Lilangeni', 'symbol': 'SZL', 'decimals': 2 }, 'SEK': { 'id': 'SEK', 'currency': 'Swedish Krona', 'symbol': 'SEK', 'decimals': 2 }, 'CHF': { 'id': 'CHF', 'currency': 'Swiss Franc', 'symbol': 'CHF', 'decimals': 2 }, 'SYP': { 'id': 'SYP', 'currency': 'Syrian Pound', 'symbol': '£', 'decimals': 2 }, 'THB': { 'id': 'THB', 'currency': 'Baht', 'symbol': 'THB', 'decimals': 2 }, 'TOP': { 'id': 'TOP', 'currency': 'Pa’anga', 'symbol': 'TOP', 'decimals': 2 }, 'TTD': { 'id': 'TTD', 'currency': 'Trinidad and Tobago Dollar', 'symbol': '$', 'decimals': 2 }, 'AED': { 'id': 'AED', 'currency': 'UAE Dirham', 'symbol': 'AED', 'decimals': 2 }, 'TND': { 'id': 'TND', 'currency': 'Tunisian Dinar', 'symbol': 'TND', 'decimals': 3 }, 'UGX': { 'id': 'UGX', 'currency': 'Uganda Shilling', 'symbol': 'UGX', 'decimals': 0 }, 'MKD': { 'id': 'MKD', 'currency': 'Denar', 'symbol': 'MKD', 'decimals': 2 }, 'EGP': { 'id': 'EGP', 'currency': 'Egyptian Pound', 'symbol': '£', 'decimals': 2 }, 'GBP': { 'id': 'GBP', 'currency': 'Pound Sterling', 'symbol': '£', 'decimals': 2 }, 'TZS': { 'id': 'TZS', 'currency': 'Tanzanian Shilling', 'symbol': 'TZS', 'decimals': 2 }, 'USD': { 'id': 'USD', 'currency': 'US Dollar', 'symbol': '$', 'decimals': 2 }, 'UYU': { 'id': 'UYU', 'currency': 'Peso Uruguayo', 'symbol': '$', 'decimals': 2 }, 'UZS': { 'id': 'UZS', 'currency': 'Uzbekistan Sum', 'symbol': 'UZS', 'decimals': 2 }, 'WST': { 'id': 'WST', 'currency': 'Tala', 'symbol': 'WST', 'decimals': 2 }, 'YER': { 'id': 'YER', 'currency': 'Yemeni Rial', 'symbol': 'YER', 'decimals': 2 }, 'TWD': { 'id': 'TWD', 'currency': 'New Taiwan Dollar', 'symbol': '$', 'decimals': 2 }, 'CUC': { 'id': 'CUC', 'currency': 'Peso Convertible', 'symbol': '$', 'decimals': 2 }, 'ZWL': { 'id': 'ZWL', 'currency': 'Zimbabwe Dollar', 'symbol': '$', 'decimals': 2 }, 'BYN': { 'id': 'BYN', 'currency': 'Belarusian Ruble', 'symbol': 'BYN', 'decimals': 2 }, 'TMT': { 'id': 'TMT', 'currency': 'Turkmenistan New Manat', 'symbol': 'TMT', 'decimals': 2 }, 'GHS': { 'id': 'GHS', 'currency': 'Ghana Cedi', 'symbol': 'GHS', 'decimals': 2 }, 'VEF': { 'id': 'VEF', 'currency': 'Bolívar', 'symbol': 'VEF', 'decimals': 2 }, 'SDG': { 'id': 'SDG', 'currency': 'Sudanese Pound', 'symbol': '£', 'decimals': 2 }, 'UYI': { 'id': 'UYI', 'currency': 'Uruguay Peso en Unidades Indexadas (URUIURUI)', 'symbol': '$', 'decimals': 0 }, 'RSD': { 'id': 'RSD', 'currency': 'Serbian Dinar', 'symbol': 'RSD', 'decimals': 2 }, 'MZN': { 'id': 'MZN', 'currency': 'Mozambique Metical', 'symbol': 'MZN', 'decimals': 2 }, 'AZN': { 'id': 'AZN', 'currency': 'Azerbaijanian Manat', 'symbol': 'AZN', 'decimals': 2 }, 'RON': { 'id': 'RON', 'currency': 'Romanian Leu', 'symbol': 'RON', 'decimals': 2 }, 'CHE': { 'id': 'CHE', 'currency': 'WIR Euro', 'symbol': 'CHE', 'decimals': 2 }, 'CHW': { 'id': 'CHW', 'currency': 'WIR Franc', 'symbol': 'CHW', 'decimals': 2 }, 'TRY': { 'id': 'TRY', 'currency': 'Turkish Lira', 'symbol': 'TRY', 'decimals': 2 }, 'XAF': { 'id': 'XAF', 'currency': 'CFA Franc BEAC', 'symbol': 'XAF', 'decimals': 0 }, 'XCD': { 'id': 'XCD', 'currency': 'East Caribbean Dollar', 'symbol': '$', 'decimals': 2 }, 'XOF': { 'id': 'XOF', 'currency': 'CFA Franc BCEAO', 'symbol': 'XOF', 'decimals': 0 }, 'XPF': { 'id': 'XPF', 'currency': 'CFP Franc', 'symbol': 'XPF', 'decimals': 0 }, 'XAU': { 'id': 'XAU', 'currency': 'Gold', 'symbol': 'XAU', 'decimals': null }, 'XDR': { 'id': 'XDR', 'currency': 'SDR (Special Drawing Right)', 'symbol': 'XDR', 'decimals': null }, 'XAG': { 'id': 'XAG', 'currency': 'Silver', 'symbol': 'XAG', 'decimals': null }, 'XPT': { 'id': 'XPT', 'currency': 'Platinum', 'symbol': 'XPT', 'decimals': null }, 'XPD': { 'id': 'XPD', 'currency': 'Palladium', 'symbol': 'XPD', 'decimals': null }, 'XUA': { 'id': 'XUA', 'currency': 'ADB Unit of Account', 'symbol': 'XUA', 'decimals': null }, 'ZMW': { 'id': 'ZMW', 'currency': 'Zambian Kwacha', 'symbol': 'ZMW', 'decimals': 2 }, 'SRD': { 'id': 'SRD', 'currency': 'Surinam Dollar', 'symbol': '$', 'decimals': 2 }, 'MGA': { 'id': 'MGA', 'currency': 'Malagasy Ariary', 'symbol': 'MGA', 'decimals': 2 }, 'COU': { 'id': 'COU', 'currency': 'Unidad de Valor Real', 'symbol': 'COU', 'decimals': 2 }, 'TJS': { 'id': 'TJS', 'currency': 'Somoni', 'symbol': 'TJS', 'decimals': 2 }, 'AOA': { 'id': 'AOA', 'currency': 'Kwanza', 'symbol': 'AOA', 'decimals': 2 }, 'BYR': { 'id': 'BYR', 'currency': 'Belarusian Ruble', 'symbol': 'BYR', 'decimals': 0 }, 'BGN': { 'id': 'BGN', 'currency': 'Bulgarian Lev', 'symbol': 'BGN', 'decimals': 2 }, 'CDF': { 'id': 'CDF', 'currency': 'Congolese Franc', 'symbol': 'CDF', 'decimals': 2 }, 'BAM': { 'id': 'BAM', 'currency': 'Convertible Mark', 'symbol': 'BAM', 'decimals': 2 }, 'EUR': { 'id': 'EUR', 'currency': 'Euro', 'symbol': '€', 'decimals': 2 }, 'MXV': { 'id': 'MXV', 'currency': 'Mexican Unidad de Inversion (UDI)', 'symbol': 'MXV', 'decimals': 2 }, 'UAH': { 'id': 'UAH', 'currency': 'Hryvnia', 'symbol': 'UAH', 'decimals': 2 }, 'GEL': { 'id': 'GEL', 'currency': 'Lari', 'symbol': 'GEL', 'decimals': 2 }, 'BOV': { 'id': 'BOV', 'currency': 'Mvdol', 'symbol': 'BOV', 'decimals': 2 }, 'PLN': { 'id': 'PLN', 'currency': 'Zloty', 'symbol': 'PLN', 'decimals': 2 }, 'BRL': { 'id': 'BRL', 'currency': 'Brazilian Real', 'symbol': 'R$', 'decimals': 2 }, 'CLF': { 'id': 'CLF', 'currency': 'Unidad de Fomento', 'symbol': 'CLF', 'decimals': 4 }, 'XSU': { 'id': 'XSU', 'currency': 'Sucre', 'symbol': 'XSU', 'decimals': null } }
