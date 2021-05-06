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
  {
    pets_allowed: true,
    outdoor: {
      roof: true,
      courtyard: false,
    },
    features: {
      concierge: false,
      doorman: false,
      elevator: false,
      laundry: false,
      live_in_super: true,
      smoke_free: false,
      wheelchair_access: false,
    },
    parking: {
      garage_parking: false,
      valet_parking: false,
    },
    storage: {
      bike_room: true,
      cold_storage: false,
      locker_cage: false,
      package_room: false,
    },
    shared_spaces: {
      children_playroom: false,
      gym: true,
      media_room: false,
      recreation_room: false,
      swimming_pool: false,
    },
    building_id: 2,
  },
  {
    pets_allowed: true,
    outdoor: {
      roof: false,
      courtyard: true,
    },
    features: {
      concierge: false,
      doorman: false,
      elevator: false,
      laundry: false,
      live_in_super: true,
      smoke_free: false,
      wheelchair_access: false,
    },
    parking: {
      garage_parking: false,
      valet_parking: false,
    },
    storage: {
      bike_room: true,
      cold_storage: false,
      locker_cage: false,
      package_room: false,
    },
    shared_spaces: {
      children_playroom: false,
      gym: false,
      media_room: false,
      recreation_room: true,
      swimming_pool: false,
    },
    building_id: 3,
  },
  {
    pets_allowed: true,
    outdoor: {
      roof: true,
      courtyard: false,
    },
    features: {
      concierge: false,
      doorman: false,
      elevator: false,
      laundry: true,
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
      package_room: true,
    },
    shared_spaces: {
      children_playroom: false,
      gym: false,
      media_room: false,
      recreation_room: false,
      swimming_pool: false,
    },
    building_id: 4,
  },
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
    building_id: 5,
  },
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
    building_id: 6,
  },
  {
    pets_allowed: true,
    outdoor: {
      roof: false,
      courtyard: false,
    },
    features: {
      concierge: false,
      doorman: false,
      elevator: true,
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
    building_id: 7,
  },
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
      children_playroom: true,
      gym: false,
      media_room: false,
      recreation_room: false,
      swimming_pool: false,
    },
    building_id: 8,
  },
];

const seedBuildingAmenities = () => BuildingAmenities.bulkCreate(buildingAmenitiesData);

module.exports = seedBuildingAmenities;
