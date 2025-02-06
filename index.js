const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const router=require('./routes/taskRoutes');
app.use('/taskmanager',router);

// MongoDB connection with error handling and success message
mongoose.connect('mongodb+srv://julhasurchowdhury:1pHAoctMuNGZ2RZa@cluster0.wp2dg.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));









// Server listening on port 5000
app.listen(5000, () => console.log('Server running on port 5000'));
