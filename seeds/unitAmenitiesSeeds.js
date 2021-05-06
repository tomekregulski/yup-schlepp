const { UnitAmenities } = require('../models');

const unitAmenitiesData = [
  {
    // unit_amenities: {
    unit_id: 1,
    outdoor: {
      balcony: false,
      garden: true,
      private_roof: true,
      roof_rights: false,
      terrace: true,
    },
    features: {
      central_air: true,
      dishwasher: true,
      fireplace: false,
      hardwood_floors: true,
      washer_dryer: false,
    },
    view: {
      city_view: true,
      garden_view: false,
      park_view: false,
      skyline_view: true,
      water_view: false,
    },
    // },
  },
];

const seedUnitAmenities = async () => await UnitAmenities.bulkCreate(unitAmenitiesData);

module.exports = seedUnitAmenities;
