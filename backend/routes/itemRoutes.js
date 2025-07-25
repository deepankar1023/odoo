
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addItem } = require('../controllers/itemController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/add', upload.array('images', 5), addItem);

module.exports = router;
