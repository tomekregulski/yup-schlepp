// seed functions
const seedManagement = require('./managementSeeds');
const seedBuilding = require('./buildingSeeds');
const seedBuildingAmenities = require('./buildingAmenitiesSeeds');
const seedUnit = require('./unitSeeds');
const seedUnitAmenities = require('./unitAmenitiesSeeds');
const seedUsers = require('./usersSeeds');
const seedBrooklyn = require('./brooklynSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedManagement();
  console.log('\n----- MANAGEMENT SEEDED -----\n');

  await seedBuilding();
  console.log('\n----- BUILDING SEEDED -----\n');

  await seedBuildingAmenities();
  console.log('\n----- BUILDING AMENITIES SEEDED -----\n');

  await seedUnit();
  console.log('\n----- UNIT SEEDED -----\n');

  await seedUnitAmenities();
  console.log('\n----- UNIT AMENITIES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBrooklyn();
  console.log('\n----- Brooklyn SEEDED -----\n');

  process.exit(0);
};

seedAll();
