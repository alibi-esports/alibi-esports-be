const db = require('../database');
const Sequelize = require('sequelize');

const Team = db.define('team', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  sub1IGN: Sequelize.STRING,
  sub2IGN: Sequelize.STRING,
  coachIGN: Sequelize.STRING,
  coachDiscord: Sequelize.STRING,
  managerDiscord: Sequelize.STRING,
});

module.exports = Team;
