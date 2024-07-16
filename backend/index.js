const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const imageAnalysisRoutes = require('./routes/imageAnalysisRoutes');
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', imageAnalysisRoutes);

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
