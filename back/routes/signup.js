const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const query = 'INSERT INTO users (user_name, user_password, user_nickname, user_intro) VALUES (?, ?, ?, ?)';
  const params = [req.body.id, req.body.password, req.body.nickname, '111'];
  db.query(query, params, (err, rows) => {
    if(err) throw new Error(err);
    console.log(rows);
  });
});

module.exports = router;