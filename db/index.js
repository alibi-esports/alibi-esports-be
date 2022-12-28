const db = require('./database');
const Player = require('./models/Player');
const Team = require('./models/Team');

Player.belongsTo(Team, { foreignKey: 'name', foreignKeyConstraint: true });
Team.hasMany(Player, { as: 'players' });

module.exports = {
  db,
  Player,
  Team,
};
