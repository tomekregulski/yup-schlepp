const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/units/?*", withAuth, async (req, res) => {
  try {
    res.render("results", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/buildings/?*", withAuth, async (req, res) => {
  try {
    res.render("building-results", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
