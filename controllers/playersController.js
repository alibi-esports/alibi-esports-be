const Player = require('../db/models/Player');
const Team = require('../db/models/Team');
const asyncHandler = require('express-async-handler');
// const bcrypt = require('bcrypt');

// @desc Get all players
// @route GET /players
// @access Private
const getAllPlayers = asyncHandler(async (req, res) => {
  const players = await Player.findAll();
  if (!players?.length) {
    return res.status(400).json({ message: 'No users found' });
  }
  res.json(players);
});

// @desc Create new player
// @route POST /players
// @access Private
const createNewPlayer = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    ign,
    isCaptain,
    rank,
    email,
    discord,
    teamName,
  } = req.body;

  // Confirm data
  if (!firstName || !lastName || !ign || !rank || !email || !discord) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const playerObj = {
    firstName,
    lastName,
    ign,
    isCaptain,
    rank,
    email,
    discord,
    teamName,
  };

  // Create & Store Player
  const player = await Player.create(playerObj);

  // If created
  if (player) {
    res.status(201).json({ message: `New player ${ign} created` });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
});

// Potential controllers to be utilized later on
// @desc Update a player
// @route PATCH /players
// @access Private
// const updatePlayer = asyncHandler(async (req, res) => {});

// @desc Delete a player
// @route DELETE /players
// @access Private
// const deletePlayer = asyncHandler(async (req, res) => {});

module.exports = {
  getAllPlayers,
  createNewPlayer,
  //   updatePlayer,
  //   deletePlayer,
};
