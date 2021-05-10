<<<<<<< HEAD
const router = require('express').Router();
const { Unit, UnitAmenities, Building, UnitImages } = require('../../models');
const multer = require('multer');
const streamifier = require('streamifier');
const cloudinary = require('cloudinary').v2;
const fileUpload = multer();
=======
const router = require("express").Router();
const { Unit, UnitAmenities, Building } = require("../../models");
>>>>>>> 645ea164ae6d9a794bec38d05ce4376c65ae8ef4

// get all units
router.get("/", async (req, res) => {
  let query = req.query;

  try {
    const unitData = await Unit.findAll({
      include: [
<<<<<<< HEAD
        { model: Building, as: 'building' },
        { model: UnitAmenities, as: 'unit_amenities' },
        { model: UnitImages, as: 'images' },
=======
        { model: Building, as: "building" },
        { model: UnitAmenities, as: "unit_amenities" },
>>>>>>> 645ea164ae6d9a794bec38d05ce4376c65ae8ef4
      ],
      where: query,
    });
    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// get one unit
router.get("/:id", async (req, res) => {
  try {
    const unitData = await Unit.findByPk(req.params.id, {
      include: [
<<<<<<< HEAD
        { model: Building, as: 'building' },
        { model: UnitAmenities, as: 'unit_amenities' },
        { model: UnitImages },
=======
        { model: Building, as: "building" },
        { model: UnitAmenities, as: "unit_amenities" },
>>>>>>> 645ea164ae6d9a794bec38d05ce4376c65ae8ef4
      ],
    });

    if (!unitData) {
      res
        .status(404)
        .json({ message: `No unit found with id: ${req.params.id}!` });
      return;
    }

    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// // create a unit
router.post("/", async (req, res) => {
  try {
    const unitData = await Unit.create(req.body);
    res.status(201).json(unitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update one unit
router.put("/:id", async (req, res) => {
  try {
    const unitData = await Unit.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!unitData) {
      res
        .status(404)
        .json({ message: `No unit found with id: ${req.params.id}!` });
      return;
    } else {
      res.status(201).json(unitData);
    }
  } catch (err) {
    res.status(500).json;
  }
});

// delete one unit
router.delete("/:id", async (req, res) => {
  try {
    const unitData = await Unit.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!unitData) {
      res
        .status(404)
        .json({ message: `No unit found with id: ${req.params.id}!` });
    }

    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create unit amenities -- not working
router.post("/amenities", async (req, res) => {
  try {
    const unitData = await UnitAmenities.create(req.body.unit_amenities);
    res.status(201).json(unitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update one unit's amenities -- not working
router.put("/amenities/:id", async (req, res) => {
  try {
    const unitData = await UnitAmenities.update(req.body, {
      where: {
        unit_id: req.params.id,
      },
    });

    if (!unitData) {
      res.status(404).json({ message: `No unit with id: ${req.params.id}!` });
      return;
    } else {
      res.json(unitData);
    }
  } catch (err) {
    res.status(500).json;
  }
});

// delete unit amenities by id
router.delete("/:id", async (req, res) => {
  try {
    const unitAmenitiesData = await UnitAmenities.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!unitAmenitiesData) {
      res.status(404).json({
        message: `No unit amenities found with id: ${req.params.id}!`,
      });
      return;
    }

    res.status(200).json(unitAmenitiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

router.post('/:id/uploadImage', fileUpload.single('image'), async (req, res) => {
  try {
    const upload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (error) {
            console.log(error);
            reject(error);
          } else resolve(result);
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    let result = await upload(req);

    const updatedUnit = await UnitImages.create(
      {
        unit_id: req.params.id,
        image: result.secure_url,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.json(updatedUnit);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
