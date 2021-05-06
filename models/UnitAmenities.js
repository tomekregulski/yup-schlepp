const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UnitAmenities extends Model {}

UnitAmenities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'unit',
        key: 'id',
      },
    },
    outdoor: {
      type: DataTypes.JSON,
    },
    features: {
      type: DataTypes.JSON,
    },
    view: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit_amenities',
  }
);

module.exports = UnitAmenities;
