const { Building } = require('../models');

const buildingData = [
  {
    id: 1,
    street_address: '58A Vernon Avenue',
    neighborhood: 'Bedford-Stuyvesant',
    city: 'Brooklyn',
    zip_code: 11206,
    trains: [
      {
        name: 'Myrtle-Willoughby Aves',
        distance: 0.03922176969305832,
        station_lines: ['G'],
      },
      {
        name: 'Bedford - Nostrand Aves',
        distance: 0.38087096385966734,
        station_lines: ['G'],
      },
      {
        name: 'Flushing Ave',
        distance: 0.4195914331293687,
        station_lines: ['G'],
      },
      {
        name: 'Flushing Ave',
        distance: 0.6057938897593355,
        station_lines: ['J', 'M'],
      },
      {
        name: 'Classon Ave',
        distance: 0.6566281004650146,
        station_lines: ['G'],
      },
    ],
    management_id: 1,
  },
  {
    id: 2,
    street_address: '1027 Halsey Street',
    neighborhood: 'Bushwick',
    city: 'Brooklyn',
    zip_code: 11207,
    trains: [
      {
        name: 'Halsey St',
        distance: 0.16174082168806753,
        station_lines: ['J'],
      },
      {
        name: 'Chauncey St',
        distance: 0.3576929108899953,
        station_lines: ['J', 'Z'],
      },
      {
        name: 'Gates Ave',
        distance: 0.4645747414729195,
        station_lines: ['J', 'Z'],
      },
      {
        name: 'Wilson Ave',
        distance: 0.5263027328751041,
        station_lines: ['L'],
      },
      {
        name: 'Bushwick - Aberdeen',
        distance: 0.5436822680793144,
        station_lines: ['L'],
      },
    ],
    management_id: 1,
  },
  {
    id: 3,
    street_address: '35 Claver Place',
    neighborhood: 'Bedford-Stuyvesant',
    city: 'Brooklyn',
    zip_code: '11238',
    trains: [
      {
        name: 'Franklin Ave',
        distance: 0.03628814782012998,
        station_lines: ['A', 'C'],
      },
      {
        name: 'Franklin Ave - Fulton St',
        distance: 0.10330734410433312,
        station_lines: ['S'],
      },
      {
        name: 'Nostrand Ave',
        distance: 0.3481889023861068,
        station_lines: ['A', 'C'],
      },
      {
        name: 'Clinton - Washington Aves',
        distance: 0.4835514803748453,
        station_lines: ['A', 'C'],
      },
      {
        name: 'Park Pl',
        distance: 0.4946408888806138,
        station_lines: ['S'],
      },
    ],
    management_id: 2,
  },
];

const seedBuilding = () => Building.bulkCreate(buildingData);

module.exports = seedBuilding;
