const router = require('express').Router();
// const googleRoutes = require('./googleRoutes');
const managementRoutes = require('./managementRoutes');
const buildingRoutes = require('./buildingRoutes');
// const buildingAmenRoutes = require('./buildingAmen-routes');
const unitRoutes = require('./unitRoutes');
// const unitAmenRoutes = require('./unitAmen-routes');

// router.use('/googleApi', googleRoutes);
router.use('/managements', managementRoutes);
router.use('/buildings', buildingRoutes);
// router.use('/building-amenities', buildingAmenRoutes);
router.use('/units', unitRoutes);
// router.use('/unit-amenities', unitAmenRoutes);

module.exports = router;
