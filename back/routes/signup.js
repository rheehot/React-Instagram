const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/signup', (req, res) => {
  console.log(req.body);
});

module.exports = router;