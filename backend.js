const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://<username>:beniwal1000@cluster.mongodb.net/queriesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Schema and Model
const querySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
});
const Query = mongoose.model('Query', querySchema);

// API Endpoint
app.post('/api/queries', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        const newQuery = new Query({ name, email, phone, subject, message });
        await newQuery.save();
        res.status(201).json({ message: 'Query submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save query' });
    }
});

// Start Backend Server
const PORT = 5000; // You can change the port if needed
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
