const router = require("express").Router();
const {
  Building,
  Management,
  Unit,
  BuildingAmenities,
  UnitAmenities,
} = require("../models");

router.get("/", async (req, res) => {
  try {
    const buildingData = await Building.findAll({
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

    const buildings = buildingData.map((building) =>
      building.get({ plain: true })
    );
    res.render("homepage", {
      buildings,
    });
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
