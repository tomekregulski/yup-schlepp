const { Management } = require('../models/');

const managementData = [
  {
    management_name: 'Gold',
    contact: {
      contact_name: 'Jon Smith',
      email: 'jon@goldmgmt.com',
      phone: '555-555-5555',
    },
    address: {
      street: '45 N4 St',
      suite: '2a',
      city: 'Brooklyn',
      state: 'New York',
      zip_code: '11211',
    },
  },
  {
    management_name: 'JBM',
    contact: {
      contact_name: 'Michael Wilson',
      email: 'mike@jbm.com',
      phone: '212-782-4345',
    },
    address: {
      street: '292 Bedford Ave',
      suite: '2a',
      city: 'Brooklyn',
      state: 'New York',
      zip_code: '11211',
    },
  },
  {
    management_name: 'Rogers',
    contact: {
      contact_name: 'Jill Rogers',
      email: 'hill@rogersmgmt.com',
      phone: '646-398-9779',
    },
    address: {
      street: '704 Dekalb Ave',
      suite: '4G',
      city: 'Brooklyn',
      state: 'New York',
      zip_code: '11216',
    },
  },
  {
    management_name: 'Ranco',
    contact: {
      contact_name: 'Joel Levin',
      email: 'joel@ranco.com',
      phone: '347-873-3321',
    },
    address: {
      street: '1037 Gates Ave',
      suite: '5F',
      city: 'Brooklyn',
      state: 'New York',
      zip_code: '11237',
    },
  },
];

const seedManagement = () => Management.bulkCreate(managementData);

module.exports = seedManagement;
