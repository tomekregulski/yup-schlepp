const router = require("express").Router();
const { Management, Building, Unit } = require("../../models");

// get all management companies
router.get("/", async (req, res) => {
  try {
    const managementData = await Management.findAll({
      include: [
        {
          model: Building,
          as: "buildings",
          include: [{ model: Unit, as: "units" }],
        },
      ],
    });
    res.status(200).json(managementData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// get one management company
router.get("/:id", async (req, res) => {
  try {
    const managementData = await Management.findByPk(req.params.id, {
      include: [{ model: Building, as: "buildings" }],
    });

    if (!managementData) {
      res.status(404).json({
        message: `No management company found with id: ${req.params.id}!`,
      });
      return;
    }

    res.status(200).json(managementData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// get one management company by name
router.get("/:management_name", async (req, res) => {
  try {
    const managementData = await Management.findByPk(
      req.params.management_name,
      {
        include: [{ model: Building, as: "buildings" }],
      }
    );

    if (!managementData) {
      res.status(404).json({
        message: `No management company found with name: ${req.params.name}!`,
      });
      return;
    }

    res.status(200).json(managementData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// create a management company
router.post("/", async (req, res) => {
  try {
    const managementData = await Management.create(req.body);
    res.status(200).json(managementData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// update one management company
router.put("/:id", async (req, res) => {
  try {
    const managementData = await Management.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!managementData) {
      res.status(404).json({
        message: `No management company found with id: ${req.params.id}!`,
      });
      return;
    } else {
      res.json(managementData);
    }
  } catch (err) {
    res.status(500).json;
  }
});

// delete one category
router.delete("/:id", async (req, res) => {
  try {
    const managementData = await Management.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!managementData) {
      res.status(404).json({
        message: `No management company found with id: ${req.params.id}!`,
      });
      return;
    }

    res.status(200).json(managementData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
