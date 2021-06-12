const { Queens } = require('../models');

const queensData = [
  {
    neighborhood: 'Astoria',
    sub_neighborhood: [
      {
        name: 'Ditmars-Steinway',
      },
    ],
  },
  {
    neighborhood: 'Auburndale',
  },
  {
    neighborhood: 'Bayside',
    sub_neighborhood: [
      {
        name: 'Bay Terrace',
      },
    ],
  },
  {
    neighborhood: 'Bellerose',
  },
  {
    neighborhood: 'Briarwood',
  },
  {
    neighborhood: 'Brookville',
  },
  {
    neighborhood: 'Cambria Heights',
  },
  {
    neighborhood: 'Clearview',
  },
  {
    neighborhood: 'College Point',
  },
  {
    neighborhood: 'Corona',
  },
  {
    neighborhood: 'Douglaston',
  },
  {
    neighborhood: 'East Elmhurst',
  },
  {
    neighborhood: 'Elmhurst',
  },
  {
    neighborhood: 'Flushing',
    sub_neighborhood: [
      {
        name: 'East Flushing',
      },
      {
        name: 'Murray Hill',
      },
    ],
  },
  {
    neighborhood: 'Forest Hills',
  },
  {
    neighborhood: 'Fresh Meadows',
  },
  {
    neighborhood: 'Glen Oaks',
  },
  {
    neighborhood: 'Glendale',
  },
  {
    neighborhood: 'Hillcrest',
  },
  {
    neighborhood: 'Hollis',
  },
  {
    neighborhood: 'Howard Beach',
    sub_neighborhood: [
      {
        name: 'Hamilton Beach',
      },
      {
        name: 'Lindenwood',
      },
      {
        name: 'Old Howard Beach',
      },
      {
        name: 'Ramblersville',
      },
      {
        name: 'Rockwood Park',
      },
    ],
  },
  {
    neighborhood: 'Jackson Heights',
  },
  {
    neighborhood: 'Jamaica',
  },
  {
    neighborhood: 'Jamaica Estates',
  },
  {
    neighborhood: 'Jamaica Hills',
  },
  {
    neighborhood: 'Kew Gardens',
  },
  {
    neighborhood: 'Kew Gardens Hills',
  },
  {
    neighborhood: 'Laurelton',
  },
  {
    neighborhood: 'Little Neck',
  },
  {
    neighborhood: 'Long Island City',
    sub_neighborhood: [
      {
        name: 'Hunters Point',
      },
    ],
  },
  {
    neighborhood: 'Maspeth',
  },
  {
    neighborhood: 'Middle Village',
  },
  {
    neighborhood: 'New Hyde Park',
  },
  {
    neighborhood: 'North Corona',
  },
  {
    neighborhood: 'Oakland Gardens',
  },
  {
    neighborhood: 'Ozone Park',
  },
  {
    neighborhood: 'Pomonok',
  },
  {
    neighborhood: 'Queens Village',
  },
  {
    neighborhood: 'Rego Park',
  },
  {
    neighborhood: 'Richmond Hill',
  },
  {
    neighborhood: 'Ridgewood',
  },
  {
    neighborhood: 'Rockaway',
    sub_neighborhood: [
      {
        name: 'Arverne',
      },
      {
        name: 'Bayswater',
      },
      {
        name: 'Belle Harbor',
      },
      {
        name: 'Breezy Point',
      },
      {
        name: 'Broad Channel',
      },
      {
        name: 'Edgemere',
      },
      {
        name: 'Far Rockaway',
      },
      {
        name: 'Hammels',
      },
      {
        name: 'Neponsit',
      },
      {
        name: 'Rockaway Park',
      },
    ],
  },
  {
    neighborhood: 'Rosedale',
  },
  {
    neighborhood: 'South Jamaica',
  },
  {
    neighborhood: 'South Ozone Park',
  },
  {
    neighborhood: 'South Richmond Hill',
  },
  {
    neighborhood: 'Springfield Gardens',
  },
  {
    neighborhood: 'St. Albans',
  },
  {
    neighborhood: 'Sunnyside',
  },
  {
    neighborhood: 'Utopia',
  },
  {
    neighborhood: 'Whitestone',
    sub_neighborhood: [
      {
        name: 'Beechhurst',
      },
      {
        name: 'Malba',
      },
    ],
  },
  {
    neighborhood: 'Woodhaven',
  },
  {
    neighborhood: 'Woodside',
  },
];

const seedQueens = () => Queens.bulkCreate(queensData);

module.exports = seedQueens;
