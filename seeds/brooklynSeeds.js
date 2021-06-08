const { Brooklyn } = require('../models');

const brooklynData = [
  {
    neighborhood: 'Bath Beach',
  },
  {
    neighborhood: 'Bay Ridge',
    sub_neighborhood: [
      {
        name: 'Fort Hamilton',
      },
    ],
  },
  {
    neighborhood: 'Bedford-Stuyvesant',
    sub_neighborhood: [
      {
        name: 'Ocean Hill',
      },
      {
        name: 'Stuyvesant Heights',
      },
    ],
  },
  {
    neighborhood: 'Bensonhurst',
  },
  {
    neighborhood: 'Bergen Beach',
    sub_neighborhood: [
      {
        name: 'Mapleton',
      },
    ],
  },
  {
    neighborhood: 'Boerum Hill',
  },
  {
    neighborhood: 'Brighton Beach',
  },
  {
    neighborhood: 'Brooklyn Heights',
  },
  {
    neighborhood: 'Brownsville',
  },
  {
    neighborhood: 'Bushwick',
  },
  {
    neighborhood: 'Canarsie',
  },
  {
    neighborhood: 'Carroll Gardens',
  },
  {
    neighborhood: 'Columbia St Waterfront',
  },
  {
    neighborhood: 'Coney Island',
  },
  {
    neighborhood: 'Crown Heights',
    sub_neighborhood: [
      {
        name: 'Weeksville',
      },
    ],
  },
  {
    neighborhood: 'DUMBO',
    sub_neighborhood: [
      {
        name: 'Vinegar Hill',
      },
    ],
  },
  {
    neighborhood: 'Ditmas Park',
    sub_neighborhood: [
      {
        name: 'Fiske Terrace',
      },
    ],
  },
  {
    neighborhood: 'Downtown Brooklyn',
  },
  {
    neighborhood: 'Dyker Heights',
  },
  {
    neighborhood: 'East Flatbush',
    sub_neighborhood: [
      {
        name: 'Farragut',
      },
      {
        name: 'Wingate',
      },
    ],
  },
  {
    neighborhood: 'East New York',
    sub_neighborhood: [
      {
        name: 'City Line',
      },
      {
        name: 'New Lots',
      },
      {
        name: 'Starrett City',
      },
    ],
  },
  {
    neighborhood: 'Flatbush',
  },
  {
    neighborhood: 'Flatlands',
  },
  {
    neighborhood: 'Fort Greene',
  },
  {
    neighborhood: 'Gerritsen Beach',
  },
  {
    neighborhood: 'Gowanus',
  },
  {
    neighborhood: 'Gravesend',
  },
  {
    neighborhood: 'Greenpoint',
  },
  {
    neighborhood: 'Greenwood',
  },
  {
    neighborhood: 'Kensington',
  },
  {
    neighborhood: 'Manhattan Beach',
  },
  {
    neighborhood: 'Marine Park',
  },
  {
    neighborhood: 'Midwood',
  },
  {
    neighborhood: 'Mill Baisin',
  },
  {
    neighborhood: 'Ocean Parkway',
  },
  {
    neighborhood: 'Old Mill Baisin',
  },
  {
    neighborhood: 'Park Slope',
  },
  {
    neighborhood: 'Prospect Heights',
  },
  {
    neighborhood: 'Prospect-Lefferts Gardens',
  },
  {
    neighborhood: 'Prospect Park South',
  },
  {
    neighborhood: 'Red Hook',
  },
  {
    neighborhood: 'Seagate',
  },
  {
    neighborhood: 'Sheapshead Bay',
    sub_neighborhood: [
      {
        name: 'Homecrest',
      },
      {
        name: 'Madison',
      },
    ],
  },
  {
    neighborhood: 'Sunset Park',
  },
  {
    neighborhood: 'Williamsburg',
    sub_neighborhood: [
      {
        name: 'East Williamsburg',
      },
    ],
  },
  {
    neighborhood: 'Windsor Terrace',
  },
];

const seedBrooklyn = () => Brooklyn.bulkCreate(brooklynData);

module.exports = seedBrooklyn;
