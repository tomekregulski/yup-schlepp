const router = require("express").Router();
const {
  Building,
  Management,
  Unit,
  BuildingAmenities,
  UnitAmenities,
} = require("../models");

router.get("/:id", async (req, res) => {
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
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
