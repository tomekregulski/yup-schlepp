const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const { beforeCreate } = require('./Building.js');

class Unit extends Model {}

Unit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit_num: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    access: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    op: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    move_in: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    market_as: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lease_term: {
      type: DataTypes.INTEGER,
      defaultValue: 12,
      allowNull: false,
    },
    gross_rent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    concession: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    months_free: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    // come back to this one *******
    net_rent: {
      type: DataTypes.INTEGER,
      // get() {
      //   return ((this.lease_term - this.months_free) * this.gross_rent) / this.lease_term;
      // },
    },
    // furnished: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    //   allowNull: false,
    // },
    legal_beds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    full_bath: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    half_bath: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    total_rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
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
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit',
  }
);

module.exports = Unit;
