const router = require("express").Router();
const {
  Building,
  Management,
  Unit,
  BuildingAmenities,
  UnitAmenities,
} = require("../models");
const withAuth = require("../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const buildingData = await Building.findByPk(req.params.id, {
      include: [
        { model: BuildingAmenities, as: "building_amenities" },
        { model: Management, as: "management" },
        {
          model: Unit,
          as: "units",
          include: [{ model: UnitAmenities, as: "unit_amenities" }],
        },
      ],
    });

    const singleBuildingData = buildingData.get({ plain: true });
    res.render("sample-listing", {
      singleBuildingData,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
