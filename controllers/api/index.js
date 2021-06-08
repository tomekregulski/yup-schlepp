const router = require('express').Router();
const googleRoutes = require('./googleRoutes');
const managementRoutes = require('./managementRoutes');
const buildingRoutes = require('./buildingRoutes');
const unitRoutes = require('./unitRoutes');
const userRoutes = require('./usersRoutes');
const opendataRoutes = require('./openDataRoutes');
const neighborhoodRoutes = require('./neighborhoods');

router.use('/googleApi', googleRoutes);
router.use('/managements', managementRoutes);
router.use('/buildings', buildingRoutes);
router.use('/units', unitRoutes);
router.use('/users', userRoutes);
router.use('/opendata', opendataRoutes);
router.use('/neighborhoods', neighborhoodRoutes);

module.exports = router;
