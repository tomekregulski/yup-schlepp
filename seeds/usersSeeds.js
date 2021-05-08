const { User } = require('../models');

const userData = [
  {
    email: 'agent@yupny.com',
    password: 'password123',
    first_name: 'Johnny',
    last_name: 'Appleseed',
    phone_number: '555-555-5555',
    payment_info: 'Chase - 1234029837',
    headshot: 'headshot',
  },
  {
    email: 'agent2@yupny.com',
    password: 'password123',
    first_name: 'Phillip',
    last_name: 'Orangepeal',
    phone_number: '777-777-7777',
    payment_info: 'Chase - 927837829737',
    headshot: 'headshot',
  },
  {
    email: 'agent3@yupny.com',
    password: 'password123',
    first_name: 'Jane',
    last_name: 'Doe',
    phone_number: '999-999-9999',
    payment_info: 'BOA - 1234029837',
    headshot: 'headshot',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
