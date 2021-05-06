const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new-listing", async (req, res) => {
  try {
    res.render("new-listing");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/edit-listing", async (req, res) => {
  try {
    res.render("edit-listing");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
