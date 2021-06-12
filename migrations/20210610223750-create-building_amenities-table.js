'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('building_amenities', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pets_allowed: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      roof: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      courtyard: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      concierge: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      doorman: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      elevator: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      laundry: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      children_playroom: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      gym: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      media_room: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      recreation_room: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      swimming_pool: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      live_in_super: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      smoke_free: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      wheelchair_access: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      garage_parking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      valet_parking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      bike_room: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      cold_storage: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      locker_cage: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      package_room: {
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
    await queryInterface.dropTable('building_amenities');
  },
};
