const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Query Schema
const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
});

const Query = mongoose.model('Query', querySchema);

// API Endpoint to Save Form Data
app.post('/api/queries', async (req, res) => {
  try {
    const query = new Query(req.body);
    await query.save();
    res.status(201).json({ message: 'Query submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save the query.' });
  }
});

// API Endpoint to Get All Queries
app.get('/api/queries', async (req, res) => {
  try {
    const queries = await Query.find(); // Fetch all queries from the database
    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch queries.' });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
