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
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'unit',
        key: 'id',
      },
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
