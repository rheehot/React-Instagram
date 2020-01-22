const express = require('express');
const router = express.Router();
const { users } = require('../../models');
const asyncHandler = require('express-async-handler')

router.post('/', asyncHandler(async (req, res) => {
  try {
    const user = await users.findOrCreate(
      { 
        where: { 'user_name': req.body.id }, 
        defaults: {
          'user_name': req.body.id,
          'user_password': req.body.password,
          'user_nickname': req.body.nickname
        }
      }
    );
    const isUserExist = !user[1];
    if (isUserExist) {
      throw new Error('중복되는 아이디입니다');
    }
    res.status(200).send();
  } catch (e) {
    throw new Error(e);
  }
}));

module.exports = router;