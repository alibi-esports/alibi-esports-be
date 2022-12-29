const Player = require('../db/models/Player');
const Team = require('../db/models/Team');
const asyncHandler = require('express-async-handler');

const createNewTeam = asyncHandler(async (req, res) => {
  const { teamName, sub1IGN, sub2IGN, coachIGN, coachDiscord, managerDiscord } =
    req.body;

  // Confirm data
  if (!teamName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const teamObj = {
    name: teamName,
    sub1IGN,
    sub2IGN,
    coachIGN,
    coachDiscord,
    managerDiscord,
  };

  // Create & Store team
  const team = await Team.create(teamObj);

  // If created
  if (team) {
    res.status(201).json({ message: `New team ${teamName} created` });
  } else {
    res.status(400).json({ message: 'Invalid team data received' });
  }
});

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

module.exports = { getAllTeams, getTeam, createNewTeam };
