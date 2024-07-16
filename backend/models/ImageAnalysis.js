const mongoose = require('mongoose');

const ImageAnalysisSchema = new mongoose.Schema({
  text: String,
  imageText: String,
});

module.exports = mongoose.model('ImageAnalysis', ImageAnalysisSchema);
