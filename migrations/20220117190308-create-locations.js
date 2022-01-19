'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      g_time: {
        type: Sequelize.INTEGER
      },
      g_latitude: {
        type: Sequelize.FLOAT
      },
      g_longitude: {
        type: Sequelize.FLOAT
      },
      g_speed: {
        type: Sequelize.FLOAT
      },
      g_battery_status: {
        type: Sequelize.STRING
      },
      g_signal_status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Locations');
  }
};