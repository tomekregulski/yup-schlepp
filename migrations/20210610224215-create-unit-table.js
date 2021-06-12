'use strict';

const { query } = require('express');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('unit', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unit_num: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      access: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      op: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      move_in: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      market_as: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lease_term: {
        type: DataTypes.INTEGER,
        defaultValue: 12,
        allowNull: false,
      },
      gross_rent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      concession: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      months_free: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      net_rent: {
        type: DataTypes.INTEGER,
      },
      legal_beds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      full_bath: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      half_bath: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      total_rooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.JSON,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('unit');
  },
};
