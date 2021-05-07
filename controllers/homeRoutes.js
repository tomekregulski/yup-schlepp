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

router.get("/managements/:id", async (req, res) => {
  try {
    const managementData = await Management.findByPk(req.params.id, {
      include: [{ model: Building, as: "buildings" }],
    });

    const singleManagementData = managementData.get({ plain: true });

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
      where: {
        management_id: req.params.id,
      },
    });

    const buildings = buildingData.map((building) =>
      building.get({ plain: true })
    );
    res.render("managements", {
      singleManagementData,
      buildings,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/buildings/:id", async (req, res) => {
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

    const unitData = await Unit.findAll({
      include: [
        { model: Building, as: "building" },
        { model: UnitAmenities, as: "unit_amenities" },
      ],
      where: {
        building_id: req.params.id,
      },
    });
    // res.status(200).json(unitData);

    const units = unitData.map((unit) => unit.get({ plain: true }));
    res.render("buildings", {
      units,
      singleBuildingData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/units/:id", async (req, res) => {
  try {
    const unitData = await Unit.findByPk(req.params.id, {
      include: [
        { model: Building, as: "building" },
        { model: UnitAmenities, as: "unit_amenities" },
      ],
    });

    const unit = unitData.get({ plain: true });
    res.render("unit", {
      unit,
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
