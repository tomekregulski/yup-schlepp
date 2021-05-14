const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const listingsRoutes = require("./listingsRoutes");
const resultsRoutes = require("./resultsRoutes");

router.use("/", homeRoutes);
router.use("/listings", listingsRoutes);
router.use("/api", apiRoutes);
router.use("/results", resultsRoutes);

module.exports = router;
