const express = require('express');
const router = express.Router();
const playersController = require('../../controllers/playersController');

router.route('/addCaptain').post(playersController.createNewPlayerCaptain);
// .get(playersController.getAllPlayers)

router.route('/addPlayer2').post(playersController.createNewPlayer2);

router.route('/addPlayer3').post(playersController.createNewPlayer3);

router.route('/addPlayer4').post(playersController.createNewPlayer4);

router.route('/addPlayer5').post(playersController.createNewPlayer5);

module.exports = router;
