const router = require("express").Router();
const {
  Building,
  Management,
  Unit,
  BuildingAmenities,
  UnitAmenities,
} = require("../../models");
const unitSorter = require("../../utils/unitSorter");

// get all building
router.get("/", unitSorter, async (req, res) => {
  const { sortedQueries } = req;

  try {
    const buildingData = await Building.findAll({
      include: [
        {
          model: BuildingAmenities,
          as: "building_amenities",
          where: sortedQueries.buildingAmenities,
        },
        { model: Management, as: "management" },
        {
          model: Unit,
          as: "units",
          where: sortedQueries.unit,
          include: [
            {
              model: UnitAmenities,
              as: "unit_amenities",
              where: sortedQueries.unitAmenities,
            },
          ],
        },
      ],
      where: sortedQueries.building,
    });
    res.status(200).json(buildingData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// get one building
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

    if (!buildingData) {
      res
        .status(404)
        .json({ message: `No building found with id: ${req.params.id}!` });
      return;
    }

    res.status(200).json(buildingData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// create a building
router.post("/", async (req, res) => {
  try {
    const buildingData = await Building.create(req.body);
    res.status(200).json(buildingData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// update one building
router.put("/:id", async (req, res) => {
  try {
    const buildingData = await Building.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!buildingData) {
      res
        .status(404)
        .json({ message: `No building found with id: ${req.params.id}!` });
      return;
    } else {
      res.json(buildingData);
    }
  } catch (err) {
    res.status(500).json;
  }
});

// delete one building
router.delete("/:id", async (req, res) => {
  try {
    const buildingData = await Building.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!buildingData) {
      res
        .status(404)
        .json({ message: `No building found with id: ${req.params.id}!` });
      return;
    }

    res.status(200).json(buildingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create building amenities
router.post("/amenities", async (req, res) => {
  try {
    const buildingAmenitiesData = await BuildingAmenities.create(req.body);
    res.status(200).json(buildingAmenitiesData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// update one building amenities
router.put("/amenities/:id", async (req, res) => {
  try {
    const buildingAmenitiesData = await BuildingAmenities.update(req.body, {
      where: {
        building_id: req.params.id,
      },
    });

    if (!buildingAmenitiesData) {
      res
        .status(404)
        .json({ message: `No building amenities with id: ${req.params.id}!` });
      return;
    } else {
      res.json(buildingAmenitiesData);
    }
  } catch (err) {
    res.status(500).json;
  }
});

// delete building amenities by id
router.delete("/amenities/:id", async (req, res) => {
  try {
    const buildingAmenitiesData = await BuildingAmenities.destroy({
      where: {
        building_id: req.params.id,
      },
    });

    if (!buildingAmenitiesData) {
      res.status(404).json({
        message: `No building amenities found with id: ${req.params.id}!`,
      });
      return;
    }

    res.status(200).json(buildingAmenitiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
