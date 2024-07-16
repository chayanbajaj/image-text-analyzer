const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const ImageAnalysis = require('../models/ImageAnalysis');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/analyze', upload.single('image'), async (req, res) => {
  const { text } = req.body;
  const { buffer } = req.file;

  try {
    const { data: { text: imageText } } = await Tesseract.recognize(buffer, 'eng');
    const analysisResult = { text, imageText };

    const newAnalysis = new ImageAnalysis(analysisResult);
    await newAnalysis.save();

    res.json(analysisResult);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
