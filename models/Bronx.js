const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Bronx extends Model {}

Bronx.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_neighborhood: {
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
    modelName: 'bronx',
  }
);

module.exports = Bronx;
