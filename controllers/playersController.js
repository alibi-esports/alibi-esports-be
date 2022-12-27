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

const createNewPlayerCaptain = asyncHandler(async (req, res) => {
  const {
    captainFName,
    captainLName,
    captainInGameName,
    captainRank,
    captainDiscord,
    teamName,
  } = req.body;

  // Confirm data
  if (
    !captainFName ||
    !captainLName ||
    !captainInGameName ||
    !captainRank ||
    !captainDiscord ||
    !teamName
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const playerObj = {
    firstName: captainFName,
    lastName: captainLName,
    ign: captainInGameName,
    isCaptain: true,
    rank: captainRank,
    discord: captainDiscord,
    teamName,
  };

  // Create & Store Player
  const player = await Player.create(playerObj);

  // If created
  if (player) {
    res
      .status(201)
      .json({ message: `New player ${captainInGameName} created` });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
});

const createNewPlayer2 = asyncHandler(async (req, res) => {
  const { p2FName, p2LName, p2InGameName, p2Rank, teamName } = req.body;

  // Confirm data
  if (!p2FName || !p2LName || !p2InGameName || !p2Rank || !teamName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const playerObj = {
    firstName: p2FName,
    lastName: p2LName,
    ign: p2InGameName,
    rank: p2Rank,
    teamName,
  };

  // Create & Store Player
  const player = await Player.create(playerObj);

  // If created
  if (player) {
    res.status(201).json({ message: `New player ${p2InGameName} created` });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
});

const createNewPlayer3 = asyncHandler(async (req, res) => {
  const { p3FName, p3LName, p3InGameName, p3Rank, teamName } = req.body;

  // Confirm data
  if (!p3FName || !p3LName || !p3InGameName || !p3Rank || !teamName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const playerObj = {
    firstName: p3FName,
    lastName: p3LName,
    ign: p3InGameName,
    rank: p3Rank,
    teamName,
  };

  // Create & Store Player
  const player = await Player.create(playerObj);

  // If created
  if (player) {
    res.status(201).json({ message: `New player ${p3InGameName} created` });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
});

const createNewPlayer4 = asyncHandler(async (req, res) => {
  const { p4FName, p4LName, p4InGameName, p4Rank, teamName } = req.body;

  // Confirm data
  if (!p4FName || !p4LName || !p4InGameName || !p4Rank || !teamName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const playerObj = {
    firstName: p4FName,
    lastName: p4LName,
    ign: p4InGameName,
    rank: p4Rank,
    teamName,
  };

  // Create & Store Player
  const player = await Player.create(playerObj);

  // If created
  if (player) {
    res.status(201).json({ message: `New player ${p4InGameName} created` });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
});

const createNewPlayer5 = asyncHandler(async (req, res) => {
  const { p5FName, p5LName, p5InGameName, p5Rank, teamName } = req.body;

  // Confirm data
  if (!p5FName || !p5LName || !p5InGameName || !p5Rank || !teamName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const playerObj = {
    firstName: p5FName,
    lastName: p5LName,
    ign: p5InGameName,
    rank: p5Rank,
    teamName,
  };

  // Create & Store Player
  const player = await Player.create(playerObj);

  // If created
  if (player) {
    res.status(201).json({ message: `New player ${p5InGameName} created` });
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
  createNewPlayerCaptain,
  createNewPlayer2,
  createNewPlayer3,
  createNewPlayer4,
  createNewPlayer5,
  //   updatePlayer,
  //   deletePlayer,
};
