const router = require('express').Router();

router.use('/', require('./routes/root'));
router.use('/players', require('./routes/playerRoutes'));
router.use('/teams', require('./routes/teamRoutes'));

module.exports = router;
