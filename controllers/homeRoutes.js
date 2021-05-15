const router = require("express").Router();
const {
  Building,
  Management,
  Unit,
  BuildingAmenities,
  UnitAmenities,
} = require("../models");
const unitSorter = require("../utils/unitSorter");
const withAuth = require("../utils/auth");
const { Op } = require("sequelize");

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
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
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
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
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

    const units = unitData.map((unit) => unit.get({ plain: true }));
    res.render("buildings", {
      units,
      singleBuildingData,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/units/:id", async (req, res) => {
  try {
    const unitData = await Unit.findByPk(req.params.id, {
      include: [
        {
          model: Building,
          as: "building",
          include: { model: BuildingAmenities, as: "building_amenities" },
        },
        { model: UnitAmenities, as: "unit_amenities" },
      ],
    });

    const unit = unitData.get({ plain: true });
    res.render("unit", {
      unit,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new-listing/management", async (req, res) => {
  try {
    const mgmtCompanies = await Management.findAll({
      order: [["management_name", "ASC"]],
    });
    const mgmt = mgmtCompanies.map((m) => m.get({ plain: true }));
    res.render("new-listing-management", {
      mgmt,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new-listing/buildings/:id", async (req, res) => {
  try {
    const mgmtData = await Management.findAll({ where: { id: req.params.id } });
    const mgmt = mgmtData.map((m) => m.get({ plain: true }));
    const mgmtBuildings = await Building.findAll({
      where: { management_id: req.params.id },
    });
    const buildings = mgmtBuildings.map((building) =>
      building.get({ plain: true })
    );
    res.render("new-listing-building", {
      mgmt,
      buildings,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new-listing/units/:id", async (req, res) => {
  try {
    const buildingData = await Building.findAll({
      where: { id: req.params.id },
    });
    const buildings = buildingData.map((b) => b.get({ plain: true }));
    const unitsData = await Unit.findAll({
      where: { building_id: req.params.id },
    });
    const units = unitsData.map((unit) => unit.get({ plain: true }));
    res.render("new-listing-unit", {
      buildings,
      units,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/edit-listing/units/:id", async (req, res) => {
  try {
    const unitData = await Unit.findByPk(req.params.id, {
      include: [
        {
          model: Building,
          as: "building",
          include: { model: BuildingAmenities, as: "building_amenities" },
        },
        { model: UnitAmenities, as: "unit_amenities" },
      ],
    });
    const unit = unitData.get({ plain: true });
    // const units = unitsData.map((unit) => unit.get({ plain: true }));
    res.render("edit-listing-unit", {
      unit,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/edit-listing/mgmt/:id", async (req, res) => {
  try {
    const mgmtData = await Management.findByPk(req.params.id);
    const mgmt = mgmtData.get({ plain: true });
    // const units = unitsData.map((unit) => unit.get({ plain: true }));
    res.render("edit-listing-mgmt", {
      mgmt,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/new-listing/form/:id", async (req, res) => {
  try {
    const buildingData = await Building.findAll({
      where: { id: req.params.id },
    });
    const buildings = buildingData.map((b) => b.get({ plain: true }));
    const unitsData = await Unit.findAll({
      where: { building_id: req.params.id },
    });
    const units = unitsData.map((unit) => unit.get({ plain: true }));
    res.render("new-listing-form", {
      buildings,
      units,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/edit-listing", async (req, res) => {
  try {
    res.render("edit-listing", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/agent-registration", withAuth, async (req, res) => {
  try {
    res.render("user-form", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
