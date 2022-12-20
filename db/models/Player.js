const Sequelize = require('sequelize');
const db = require('../database');

const Player = db.define('player', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ign: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^(.{5,16})#[a-zA-Z0-9]{3,5}/,
    },
  },
  isCaptain: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  rank: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
  discord: {
    type: Sequelize.STRING,
    validate: {
      is: /[a-zA-Z0-9_]+#+\d{4}$/,
    },
  },
});

module.exports = Player;
