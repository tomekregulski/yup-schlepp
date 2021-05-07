const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const listingsRoutes = require('./listingsRoutes');

router.use('/', homeRoutes);
router.use('/sample-listing', listingsRoutes);
router.use('/api', apiRoutes);

module.exports = router;
