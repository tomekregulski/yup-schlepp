const router = require('express').Router();
const { Unit, UnitAmenities, Building, BuildingAmenities } = require('../../models');
const multer = require('multer');
const streamifier = require('streamifier');
const cloudinary = require('cloudinary').v2;
const fileUpload = multer({ limit: { fileSize: '25MB' } });
const unitSorter = require('../../utils/unitSorter');
const { Op } = require('sequelize');

// get all units
router.get('/', unitSorter, async (req, res) => {
  const { sortedQueries } = req;

  try {
    const unitData = await Unit.findAll({
      include: [
        {
          model: Building,
          as: 'building',
          where: sortedQueries.building,
          include: {
            model: BuildingAmenities,
            as: 'building_amenities',
            where: sortedQueries.buildingAmenities,
          },
        },
        {
          model: UnitAmenities,
          as: 'unit_amenities',
          where: sortedQueries.unitAmenities,
        },
        // { model: UnitImages },
      ],
      where: sortedQueries.unit,
    });

    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// get one unit
router.get('/:id', async (req, res) => {
  try {
    const unitData = await Unit.findByPk(req.params.id, {
      include: [
        {
          model: Building,
          as: 'building',
          include: { model: BuildingAmenities, as: 'building_amenities' },
        },
        { model: UnitAmenities, as: 'unit_amenities' },
        // { model: UnitImages },
      ],
    });

    if (!unitData) {
      res.status(404).json({ message: `No unit found with id: ${req.params.id}!` });
      return;
    }
    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// // create a unit
router.post('/', async (req, res) => {
  try {
    const unitData = await Unit.create(req.body);
    res.status(201).json(unitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update one unit
router.put('/:id', async (req, res) => {
  try {
    const unitData = await Unit.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!unitData) {
      res.status(404).json({ message: `No unit found with id: ${req.params.id}!` });
      return;
    } else {
      res.status(201).json(unitData);
    }
  } catch (err) {
    res.status(500).json;
  }
});

// delete one unit
router.delete('/:id', async (req, res) => {
  try {
    const unitData = await Unit.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!unitData) {
      res.status(404).json({ message: `No unit found with id: ${req.params.id}!` });
    }

    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create unit amenities -- not working
router.post('/amenities', async (req, res) => {
  try {
    const unitData = await UnitAmenities.create(req.body);
    res.status(200).json(unitData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// update one unit's amenities -- not working
router.put('/amenities/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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

router.patch('/:id/uploadImage', fileUpload.array('image', 20), async (req, res) => {
  console.log(req.body);
  const upload = (file) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (error) {
          console.log(error);
          reject(error);
        } else resolve(result);
      });
      streamifier.createReadStream(file.buffer).pipe(stream);
    });
  };

  console.log(req);
  try {
    const savedImages = await Promise.all(
      req.files.map(async (file) => {
        let result = await upload(file);

        return result.secure_url;
      })
    );

    const imageObj = Object.assign({}, savedImages);

    console.log(imageObj);
    console.log(req.params);

    const updatedUnit = await Unit.update(
      {
        image: imageObj,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.json(updatedUnit);
    // console.log(res);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
