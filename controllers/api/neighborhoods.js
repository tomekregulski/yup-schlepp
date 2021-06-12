const router = require('express').Router();
const { Brooklyn, Queens, Bronx, Manhattan } = require('../../models');

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

router.get('/queens', async (req, res) => {
  try {
    const queensNeighborhoods = await Queens.findAll();
    res.status(200).json(queensNeighborhoods);
    console.log(res);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/bronx', async (req, res) => {
  try {
    const bronxNeighborhoods = await Bronx.findAll();
    res.status(200).json(bronxNeighborhoods);
    console.log(res);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/manhattan', async (req, res) => {
  try {
    const manhattanNeighborhoods = await Manhattan.findAll();
    res.status(200).json(manhattanNeighborhoods);
    console.log(res);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
