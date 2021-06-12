'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('building', 'management_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'management',
        key: 'id',
      },
    });

    await queryInterface.addColumn('building_amenities', 'building_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'building',
        key: 'id',
      },
    });

    await queryInterface.addColumn('unit', 'building_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'building',
        key: 'id',
      },
    });

    await queryInterface.addColumn('unit_amenities', 'unit_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'unit',
        key: 'id',
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
    await queryInterface.removeColumn('building', 'management_id');
    await queryInterface.removeColumn('building_amenites', 'building_id');
    await queryInterface.removeColumn('unit', 'building_id');
    await queryInterface.removeColumn('unit_amenities', 'unit_id');
  },
};
