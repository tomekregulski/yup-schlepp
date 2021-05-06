const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class BuildingAmenities extends Model {}

BuildingAmenities.init(
  {
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
    outdoor: {
      type: DataTypes.JSON,
    },
    features: {
      type: DataTypes.JSON,
    },
    parking: {
      type: DataTypes.JSON,
    },
    storage: {
      type: DataTypes.JSON,
    },
    shared_spaces: {
      type: DataTypes.JSON,
    },
    building_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'building',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'building_amenities',
  }
);

module.exports = BuildingAmenities;
