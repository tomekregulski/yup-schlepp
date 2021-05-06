const { Building } = require('../models');

const buildingData = [
  {
    street_address: '901 Willoughby Ave',
    neighborhood: 'Bushwick',
    city: 'Brooklyn',
    zip_code: '11221',
    management_id: 1,
  },
  {
    street_address: '372A Bainbridge St',
    neighborhood: 'Ocean Hill',
    city: 'Brooklyn',
    zip_code: '11233',
    management_id: 1,
  },
  {
    street_address: '92 Harman St',
    neighborhood: 'Bushwick',
    city: 'Brooklyn',
    zip_code: '11221',
    management_id: 2,
  },
  {
    street_address: '814 Macdonough',
    neighborhood: 'Ocean Hill',
    city: 'Brooklyn',
    zip_code: '11233',
    management_id: 2,
  },
];

const seedBuilding = () => Building.bulkCreate(buildingData);

module.exports = seedBuilding;
