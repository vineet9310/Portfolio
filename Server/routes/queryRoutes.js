const express = require('express');
const { saveQuery, getAllQueries } = require('../controllers/queryController');

const router = express.Router();

router.post('/', saveQuery); // POST /api/queries
router.get('/', getAllQueries); // GET /api/queries

module.exports = router;
