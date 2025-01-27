const Query = require('../Models/Query');

// Save a new query
exports.saveQuery = async (req, res) => {
  try {
    const query = new Query(req.body);
    await query.save();
    res.status(201).json({ message: 'Query submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save the query.' });
  }
};

// Fetch all queries
exports.getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find();
    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch queries.' });
  }
};
