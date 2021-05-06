const { Unit } = require('../models');

const unitData = [
  {
    building_id: 1,
    unit_num: '1F',
    lease: {
      status: 'in contract',
      market_as: 'apartment',
      gross_rent: 2500,
      concession: true,
      months_free: 1,
      lease_term: 12,
      move_in: 'May 1, 2021',
    },
    rooms: {
      total_rooms: 4,
      legal_beds: 2,
      full_bath: 1,
      half_bath: 1,
      size: 1000,
    },
    access: 'lockbox 1234',
    op: 100,
    desc: 'this is a description',
    furnished: false,
  },
  {
    building_id: 1,
    unit_num: '2F',
    lease: {
      status: 'in contract',
      market_as: 'apartment',
      gross_rent: 2500,
      concession: true,
      months_free: 1,
      lease_term: 12,
      move_in: 'May 1, 2021',
    },
    rooms: {
      total_rooms: 4,
      legal_beds: 2,
      full_bath: 1,
      half_bath: 1,
      size: 1000,
    },
    access: 'lockbox 1234',
    op: 100,
    desc: 'this is a description',
    furnished: false,
  },
  {
    building_id: 2,
    unit_num: '1F',
    lease: {
      status: 'in contract',
      market_as: 'apartment',
      gross_rent: 2500,
      concession: true,
      months_free: 1,
      lease_term: 12,
      move_in: 'May 1, 2021',
    },
    rooms: {
      total_rooms: 4,
      legal_beds: 2,
      full_bath: 1,
      half_bath: 1,
      size: 1000,
    },
    access: 'lockbox 1234',
    op: 100,
    desc: 'this is a description',
    furnished: false,
  },
  {
    building_id: 2,
    unit_num: '2F',
    lease: {
      status: 'in contract',
      market_as: 'apartment',
      gross_rent: 2500,
      concession: true,
      months_free: 1,
      lease_term: 12,
      move_in: 'May 1, 2021',
    },
    rooms: {
      total_rooms: 4,
      legal_beds: 2,
      full_bath: 1,
      half_bath: 1,
      size: 1000,
    },
    access: 'lockbox 1234',
    op: 100,
    desc: 'this is a description',
    furnished: false,
  },
];

const seedUnit = async () => await Unit.bulkCreate(unitData);

module.exports = seedUnit;
