const router = require("express").Router();

router.get("/units/?*", async (req, res) => {
  try {
    res.render("results");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/buildings/?*", async (req, res) => {
  try {
    res.render("building-results");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
