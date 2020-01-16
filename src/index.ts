// tslint:disable: object-literal-sort-keys
const states = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
    territory: false,
    contiguous: true
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
    territory: false,
    contiguous: false
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS',
    territory: true,
    contiguous: false
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    territory: false,
    contiguous: true
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
    territory: false,
    contiguous: true
  },
  {
    name: 'California',
    abbreviation: 'CA',
    territory: false,
    contiguous: true
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
    territory: false,
    contiguous: true
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
    territory: false,
    contiguous: true
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
    territory: false,
    contiguous: true
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
    territory: false,
    contiguous: true
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM',
    territory: true,
    contiguous: false
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
    territory: false,
    contiguous: true
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
    territory: false,
    contiguous: true
  },
  {
    name: 'Guam',
    abbreviation: 'GU',
    territory: true,
    contiguous: false
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
    territory: false,
    contiguous: false
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
    territory: false,
    contiguous: true
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
    territory: false,
    contiguous: true
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
    territory: false,
    contiguous: true
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
    territory: false,
    contiguous: true
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
    territory: false,
    contiguous: true
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
    territory: false,
    contiguous: true
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
    territory: false,
    contiguous: true
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
    territory: false,
    contiguous: true
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH',
    territory: true,
    contiguous: false
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
    territory: false,
    contiguous: true
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    territory: false,
    contiguous: true
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
    territory: false,
    contiguous: true
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
    territory: false,
    contiguous: true
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
    territory: false,
    contiguous: true
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
    territory: false,
    contiguous: true
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
    territory: false,
    contiguous: true
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
    territory: false,
    contiguous: true
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
    territory: false,
    contiguous: true
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
    territory: false,
    contiguous: true
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
    territory: false,
    contiguous: true
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
    territory: false,
    contiguous: true
  },
  {
    name: 'New York',
    abbreviation: 'NY',
    territory: false,
    contiguous: true
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
    territory: false,
    contiguous: true
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
    territory: false,
    contiguous: true
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
    territory: true,
    contiguous: false
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
    territory: false,
    contiguous: true
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
    territory: false,
    contiguous: true
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
    territory: false,
    contiguous: true
  },
  {
    name: 'Palau',
    abbreviation: 'PW',
    territory: true,
    contiguous: false
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    territory: false,
    contiguous: true
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
    territory: true,
    contiguous: false
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
    territory: false,
    contiguous: true
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
    territory: false,
    contiguous: true
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
    territory: false,
    contiguous: true
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
    territory: false,
    contiguous: true
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
    territory: false,
    contiguous: true
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
    territory: false,
    contiguous: true
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
    territory: false,
    contiguous: true
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI',
    territory: true,
    contiguous: false
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
    territory: false,
    contiguous: true
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
    territory: false,
    contiguous: true
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
    territory: false,
    contiguous: true
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
    territory: false,
    contiguous: true
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
    territory: false,
    contiguous: true
  }
];

export default states;
