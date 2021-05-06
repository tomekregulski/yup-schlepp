// seed functions
const seedManagement = require('./managementSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedManagement();
  console.log('\n----- MANAGEMENT SEEDED -----\n');

  process.exit(0);
};

seedAll();
