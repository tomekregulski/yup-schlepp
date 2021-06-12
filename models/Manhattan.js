const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Manhattan extends Model {}

Manhattan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    neighborhood: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'manhattan',
  }
);

module.exports = Manhattan;
