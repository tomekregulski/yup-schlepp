const { Manhattan } = require('../models');

const manhattanData = [
  {
    area: 'Downtown',
    neighborhood: [
      {
        name: 'Battery Park City',
      },
      {
        name: 'Chelsea',
        sub_neighborhood: [
          {
            name: 'West Chelsea',
          },
        ],
      },
      {
        name: 'Chinatown',
      },
      {
        name: 'Civic Center',
      },
      {
        name: 'East Village',
      },
      {
        name: 'Financial District',
        sub_neighborhood: [
          {
            name: 'Fulton/Seaport',
          },
        ],
      },
      {
        name: 'Flatiron',
        sub_neighborhood: [
          {
            name: 'NoMad',
          },
        ],
      },
      {
        name: 'Gramercy Park',
      },
      {
        name: 'Greenwich Village',
        sub_neighborhood: [
          {
            name: 'Noho',
          },
        ],
      },
      {
        name: 'Little Italy',
      },
      {
        name: 'Lower East Side',
        sub_neighborhood: [
          {
            name: 'Two Bridges',
          },
        ],
      },
      {
        name: 'Nolita',
      },
      {
        name: 'Soho',
        sub_neighborhood: [
          {
            name: 'Hudson Square',
          },
        ],
      },
      {
        name: 'Stuyvesant Town/PCV',
      },
      {
        name: 'Tribeca',
      },
      {
        name: 'West Village',
      },
    ],
  },
  {
    area: 'Midtown',
    neighborhood: [
      {
        name: 'Central Park South',
      },
      {
        name: 'Midtown',
      },
      {
        name: 'Midtown East',
        sub_neighborhood: [
          {
            name: 'Kips Bay',
          },
          {
            name: 'Murray Hill',
          },
          {
            name: 'Sutton Place',
          },
          {
            name: 'Turtle Bay',
            sub_neighborhood: [
              {
                name: 'Beekman',
              },
            ],
          },
        ],
      },
      {
        name: 'Midtown South',
      },
      {
        name: 'Midtown West',
        sub_neighborhood: [
          {
            name: "Hell's Kitchen",
          },
          {
            name: 'Hudson Yards',
          },
        ],
      },
    ],
  },
  {
    area: 'Upper East Side',
    neighborhood: [
      {
        name: 'Upper East Side',
        sub_neighborhood: [
          {
            name: 'Carnegie Hill',
          },
          {
            name: 'Lenox Hill',
          },
          {
            name: 'Upper Carnegie Hill',
          },
          {
            name: 'Yorkville',
          },
        ],
      },
    ],
  },
  {
    area: 'Upper Manhattan',
    neighborhood: [
      {
        name: 'Central Harlem',
        sub_neighborhood: [
          {
            name: 'South Harlem',
          },
        ],
      },
      {
        name: 'East Harlem',
      },
      {
        name: 'Hamilton Heights',
      },
      {
        name: 'Inwood',
      },
      {
        name: 'Marble Hill',
      },
      {
        name: 'Morningside Heights',
      },
      {
        name: 'Washington Heights',
        sub_neighborhood: [
          {
            name: 'Fort George',
          },
          {
            name: 'Hudson Heights',
          },
        ],
      },
      {
        name: 'West Harlem',
        sub_neighborhood: [
          {
            name: 'Manhattanville',
          },
        ],
      },
    ],
  },
  {
    area: 'Upper West Side',
    neighborhood: [
      {
        name: 'Upper West Side',
        sub_neighborhood: [
          {
            name: 'Lincoln Square',
          },
          {
            name: 'Manhattan Valley',
          },
        ],
      },
    ],
  },
];

const seedManhattan = () => Manhattan.bulkCreate(manhattanData);

module.exports = seedManhattan;
