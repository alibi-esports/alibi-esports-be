const db = require('../database');
const Sequelize = require('sequelize');

const Team = db.define('team', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Team;
