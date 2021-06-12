'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('unit_amenities', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      furnished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      balcony: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      garden: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      private_roof: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      roof_rights: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      terrace: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      central_air: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      dishwasher: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      fireplace: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      hardwood_floors: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      washer_dryer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      city_view: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      garden_view: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      park_view: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      skyline_view: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      water_view: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
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
    await queryInterface.dropTable('unit_amenities');
  },
};
