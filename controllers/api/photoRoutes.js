const multer = require('multer');
const streamifier = require('streamifier');
const cloudinary = require('cloudinary');
const fileUpload = multer();
const router = require('express').Router();
const { Unit } = require('../../models');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});
router.patch('/:id/uploadImage', fileUpload.single('images'), async (req, res) => {
  try {
    const upload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    let result = await upload(req);
    const updatedUnit = await Unit.update(
      {
        image: result.secure_url,
      },
      {
        where: { id: req.params.id },
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
