const express = require('express');
const router = express.Router();
const { users } = require('../../models');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const getHashedPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  } catch (e) {
    throw new Error('Password hashing failed!');
  }
};

router.post('/', asyncHandler(async (req, res) => {
  try {
    const user = await users.findOne({ where : { 'user_name': req.body.id } });
    if (user !== null) {
      throw new Error('중복되는 아이디입니다');
    }

    const hashedPassword = await getHashedPassword(req.body.password);
    await users.create({
      user_name: req.body.id,
      user_password: hashedPassword,
      user_nickname: req.body.nickname
    });
    res.status(200).send();
  } catch (e) {
    throw new Error(e);
  }
}));

module.exports = router;