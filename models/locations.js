'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Locations.init({
    g_time: DataTypes.INTEGER,
    g_latitude: DataTypes.FLOAT,
    g_longitude: DataTypes.FLOAT,
    g_speed: DataTypes.FLOAT,
    g_battery_status: DataTypes.STRING,
    g_signal_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Locations',
  });
  return Locations;
};