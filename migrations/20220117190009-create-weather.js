'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Weather', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      s_id: {
        type: Sequelize.INTEGER
      },
      s_rssi: {
        type: Sequelize.INTEGER
      },
      s_snr: {
        type: Sequelize.INTEGER
      },
      s_remaining_samples_to_send: {
        type: Sequelize.INTEGER
      },
      s_temperature_inside: {
        type: Sequelize.INTEGER
      },
      s_temperature_outside: {
        type: Sequelize.INTEGER
      },
      s_hygrometry: {
        type: Sequelize.INTEGER
      },
      s_pressure: {
        type: Sequelize.INTEGER
      },
      s_vref: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Weather');
  }
};