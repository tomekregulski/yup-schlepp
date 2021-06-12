'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Session', {
      sid: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      expires: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      data: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  // ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Session');
  },
};
