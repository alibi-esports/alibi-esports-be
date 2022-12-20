const db = require('./database');
const Player = require('./models/Player');
const Team = require('./models/Team');

Player.belongsTo(Team);
Team.hasMany(Player);

module.exports = {
  db,
  Player,
  Team,
};
