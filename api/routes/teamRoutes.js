const express = require('express');
const router = express.Router();
const teamsController = require('../../controllers/teamsController');

router.route('/createTeam').post(teamsController.createNewTeam);
// .get(teamsController.getAllTeams)
// .post(teamsController.getTeam);

module.exports = router;
