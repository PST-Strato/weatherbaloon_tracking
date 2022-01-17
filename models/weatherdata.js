'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class weatherData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  weatherData.init({
    temperature: DataTypes.FLOAT,
    pressure: DataTypes.INTEGER,
    hygrometry: DataTypes.INTEGER,
    altitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'weatherData',
  });
  return weatherData;
};