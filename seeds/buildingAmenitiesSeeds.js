const { BuildingAmenities } = require('../models');

const buildingAmenitiesData = [
  {
    pets_allowed: true,
    outdoor: {
      roof: false,
      courtyard: false,
    },
    features: {
      concierge: false,
      doorman: false,
      elevator: false,
      laundry: false,
      live_in_super: false,
      smoke_free: false,
      wheelchair_access: false,
    },
    parking: {
      garage_parking: false,
      valet_parking: false,
    },
    storage: {
      bike_room: false,
      cold_storage: false,
      locker_cage: false,
      package_room: false,
    },
    shared_spaces: {
      children_playroom: false,
      gym: false,
      media_room: false,
      recreation_room: false,
      swimming_pool: false,
    },
    building_id: 1,
  },
];

const seedBuildingAmenities = () => BuildingAmenities.bulkCreate(buildingAmenitiesData);

module.exports = seedBuildingAmenities;
