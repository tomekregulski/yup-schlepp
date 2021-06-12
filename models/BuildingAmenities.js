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
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'building_amenities',
  }
);

module.exports = BuildingAmenities;
