const Player = require('../db/models/Player');
const Team = require('../db/models/Team');
const asyncHandler = require('express-async-handler');

// @desc Get all teams + players on that team
// @route GET /teams
// @access Private
const getAllTeams = asyncHandler(async (req, res) => {
  const teams = await Team.findAll({ include: [Player] });
  if (!teams?.length) {
    return res.status(400).json({ message: 'No teams found' });
  }
  res.json(teams);
});

// @desc Get one team
// @route GET /teams
// @access Private
const getTeam = asyncHandler(async (req, res) => {
  const team = await Team.findOne({ include: [Player] });
  if (!team) {
    return res.status(400).json({ message: 'No teams found' });
  }
  res.json(team);
});

module.exports = { getAllTeams, getTeam };
