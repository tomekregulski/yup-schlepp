const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Unit extends Model {}

Unit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    building_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'building',
        key: 'id',
      },
    },
    unit_num: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lease: {
      type: DataTypes.JSON,
    },
    rooms: {
      type: DataTypes.JSON,
    },
    access: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    op: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    furnished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit',
  }
);

module.exports = Unit;
