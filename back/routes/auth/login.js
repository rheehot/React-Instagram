const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', 
  passport.authenticate('local'), (req, res) => {
    res.status(200).json(req.user);
});

module.exports = router;