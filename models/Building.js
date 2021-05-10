const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Building extends Model {}

Building.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 5,
      },
    },
    // going to rely on third party apis for trains, perhaps we need a separate model for this
    // trains: {
    //   type: DataTypes.JSON,
    // },
    management_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'management',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'building',
  }
);

module.exports = Building;
