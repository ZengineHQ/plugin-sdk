import { SelectOption } from '../atoms/Select';

const getStates = (includeCanada: boolean = false): SelectOption[] => {
  const us = [
    {
      key: 'US-AL',
      value: 'Alabama',
    },
    {
      key: 'US-AK',
      value: 'Alaska',
    },
    {
      key: 'US-AZ',
      value: 'Arizona',
    },
    {
      key: 'US-AR',
      value: 'Arkansas',
    },
    {
      key: 'US-CA',
      value: 'California',
    },
    {
      key: 'US-CO',
      value: 'Colorado',
    },
    {
      key: 'US-CT',
      value: 'Connecticut',
    },
    {
      key: 'US-DC',
      value: 'District of Columbia',
    },
    {
      key: 'US-DE',
      value: 'Delaware',
    },
    {
      key: 'US-FL',
      value: 'Florida',
    },
    {
      key: 'US-GA',
      value: 'Georgia',
    },
    {
      key: 'US-HI',
      value: 'Hawaii',
    },
    {
      key: 'US-ID',
      value: 'Idaho',
    },
    {
      key: 'US-IL',
      value: 'Illinois',
    },
    {
      key: 'US-IN',
      value: 'Indiana',
    },
    {
      key: 'US-IA',
      value: 'Iowa',
    },
    {
      key: 'US-KS',
      value: 'Kansas',
    },
    {
      key: 'US-KY',
      value: 'Kentucky',
    },
    {
      key: 'US-LA',
      value: 'Louisiana',
    },
    {
      key: 'US-ME',
      value: 'Maine',
    },
    {
      key: 'US-MD',
      value: 'Maryland',
    },
    {
      key: 'US-MA',
      value: 'Massachusetts',
    },
    {
      key: 'US-MI',
      value: 'Michigan',
    },
    {
      key: 'US-MN',
      value: 'Minnesota',
    },
    {
      key: 'US-MS',
      value: 'Mississippi',
    },
    {
      key: 'US-MO',
      value: 'Missouri',
    },
    {
      key: 'US-MT',
      value: 'Montana',
    },
    {
      key: 'US-NE',
      value: 'Nebraska',
    },
    {
      key: 'US-NV',
      value: 'Nevada',
    },
    {
      key: 'US-NH',
      value: 'New Hampshire',
    },
    {
      key: 'US-NJ',
      value: 'New Jersey',
    },
    {
      key: 'US-NM',
      value: 'New Mexico',
    },
    {
      key: 'US-NY',
      value: 'New York',
    },
    {
      key: 'US-NC',
      value: 'North Carolina',
    },
    {
      key: 'US-ND',
      value: 'North Dakota',
    },
    {
      key: 'US-OH',
      value: 'Ohio',
    },
    {
      key: 'US-OK',
      value: 'Oklahoma',
    },
    {
      key: 'US-OR',
      value: 'Oregon',
    },
    {
      key: 'US-PA',
      value: 'Pennsylvania',
    },
    {
      key: 'US-RI',
      value: 'Rhode Island',
    },
    {
      key: 'US-SC',
      value: 'South Carolina',
    },
    {
      key: 'US-SD',
      value: 'South Dakota',
    },
    {
      key: 'US-TN',
      value: 'Tennessee',
    },
    {
      key: 'US-TX',
      value: 'Texas',
    },
    {
      key: 'US-UT',
      value: 'Utah',
    },
    {
      key: 'US-VT',
      value: 'Vermont',
    },
    {
      key: 'US-VA',
      value: 'Virginia',
    },
    {
      key: 'US-WA',
      value: 'Washington',
    },
    {
      key: 'US-WV',
      value: 'West Virginia',
    },
    {
      key: 'US-WI',
      value: 'Wisconsin',
    },
    {
      key: 'US-WY',
      value: 'Wyoming',
    },
  ];

  const ca = [
    {
      key: 'CA-AA',
      value: 'AA',
    },
    {
      key: 'CA-AE',
      value: 'AE',
    },
    {
      key: 'CA-AP',
      value: 'AP',
    },
    {
      key: 'CA-AB',
      value: 'Alberta',
    },
    {
      key: 'CA-AS',
      value: 'American Samoa',
    },
    {
      key: 'CA-BC',
      value: 'British Columbia',
    },
    {
      key: 'CA-GU',
      value: 'Guam',
    },
    {
      key: 'CA-MB',
      value: 'Manitoba',
    },
    {
      key: 'CA-NT',
      value: 'N.W.T.',
    },
    {
      key: 'CA-NB',
      value: 'New Brunswick',
    },
    {
      key: 'CA-NL',
      value: 'Newfoundland',
    },
    {
      key: 'CA-MP',
      value: 'Northern Mariana Islands',
    },
    {
      key: 'CA-NS',
      value: 'Nova Scotia',
    },
    {
      key: 'CA-NU',
      value: 'Nunavut',
    },
    {
      key: 'CA-ON',
      value: 'Ontario',
    },
    {
      key: 'CA-PW',
      value: 'Palau',
    },
    {
      key: 'CA-PE',
      value: 'Prince Edward Island',
    },
    {
      key: 'CA-PQ',
      value: 'Quebec',
    },
    {
      key: 'CA-SK',
      value: 'Saskatchewan',
    },
    {
      key: 'CA-VI',
      value: 'Virgin Island',
    },
    {
      key: 'CA-YT',
      value: 'Yukon',
    },
  ];

  return includeCanada ? us.concat(ca) : us;
};

export default getStates;
