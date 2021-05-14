const { Management } = require('../models');

const managementData = [
  {
    management_name: 'Gold',
  },
  {
    management_name: 'Mr Lox',
  },
];

const seedManagement = () => Management.bulkCreate(managementData);

module.exports = seedManagement;
