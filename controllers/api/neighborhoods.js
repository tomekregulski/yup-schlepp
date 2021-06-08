const router = require('express').Router();
const { Brooklyn } = require('../../models');

// get all management companies
router.get('/brooklyn', async (req, res) => {
  try {
    const brooklynNeighborhoods = await Brooklyn.findAll();
    res.status(200).json(brooklynNeighborhoods);
    console.log(res);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
