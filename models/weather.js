'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Weather.init({
    s_id: DataTypes.INTEGER,
    s_rssi: DataTypes.INTEGER,
    s_snr: DataTypes.INTEGER,
    s_remaining_samples_to_send: DataTypes.INTEGER,
    s_temperature_inside: DataTypes.INTEGER,
    s_temperature_outside: DataTypes.INTEGER,
    s_hygrometry: DataTypes.INTEGER,
    s_pressure: DataTypes.INTEGER,
    s_vref: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Weather',
  });
  return Weather;
};