const { Bronx } = require('../models');

const bronxData = [
  {
    neighborhood: 'Baychester',
  },
  {
    neighborhood: 'Bedford Park',
  },
  {
    neighborhood: 'Belmont',
  },
  {
    neighborhood: 'Bronxwood',
  },
  {
    neighborhood: 'Castle Hill',
  },
  {
    neighborhood: 'City Island',
  },
  {
    neighborhood: 'Co-op City',
  },
  {
    neighborhood: 'Concourse',
  },
  {
    neighborhood: 'Country Club',
  },
  {
    neighborhood: 'Crotona Park East',
  },
  {
    neighborhood: 'East Tremont',
    sub_neighborhood: [
      {
        name: 'West Farms',
      },
    ],
  },
  {
    neighborhood: 'Eastchester',
  },
  {
    neighborhood: 'Edenwald',
  },
  {
    neighborhood: 'Fordham',
  },
  {
    neighborhood: 'Highbridge',
  },
  {
    neighborhood: 'Hunts Point',
  },
  {
    neighborhood: 'Kingsbridge',
    sub_neighborhood: [
      {
        name: 'Kingsbridge Heights',
      },
    ],
  },
  {
    neighborhood: 'Laconia',
  },
  {
    neighborhood: 'Longwood',
  },
  {
    neighborhood: 'Melrose',
  },
  {
    neighborhood: 'Morris Heights',
  },
  {
    neighborhood: 'Morris Park',
  },
  {
    neighborhood: 'Morrisania',
    sub_neighborhood: [
      {
        name: 'Claremont',
      },
    ],
  },
  {
    neighborhood: 'Mott Haven',
    sub_neighborhood: [
      {
        name: 'North New York',
      },
    ],
  },
  {
    neighborhood: 'Norwood',
  },
  {
    neighborhood: 'Parkchester',
  },
  {
    neighborhood: 'Pelham Bay',
  },
  {
    neighborhood: 'Pelham Gardens',
  },
  {
    neighborhood: 'Pelham Parkway',
  },
  {
    neighborhood: 'Port Morris',
  },
  {
    neighborhood: 'Riverdale',
    sub_neighborhood: [
      {
        name: 'Fieldston',
      },
      {
        name: 'Spuyten Duyvil',
      },
    ],
  },
  {
    neighborhood: 'Schuylerville',
  },
  {
    neighborhood: 'Soundview',
  },
  {
    neighborhood: 'Throgs Neck',
    sub_neighborhood: [
      {
        name: 'Locust Point',
      },
    ],
  },
  {
    neighborhood: 'Tremont',
    sub_neighborhood: [
      {
        name: 'Mt. Hope',
      },
    ],
  },
  {
    neighborhood: 'University Heights',
  },
  {
    neighborhood: 'Van Nest',
  },
  {
    neighborhood: 'Wakefield',
  },
  {
    neighborhood: 'Westchester Village',
    sub_neighborhood: [
      {
        name: 'Westchester Square',
      },
    ],
  },
  {
    neighborhood: 'Williamsbridge',
  },
  {
    neighborhood: 'Woodlawn',
  },
  {
    neighborhood: 'Woodstock',
  },
];

const seedBronx = () => Bronx.bulkCreate(bronxData);

module.exports = seedBronx;
