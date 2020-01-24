const express = require('express');
const router = express.Router();
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const { follows, posts } = require('../../models');

router.post('/login', 
  passport.authenticate('local'), asyncHandler(async (req, res) => {
    console.log(user);
    // const id = user.get('user_id');
    // const userFollowings = [];
    // const userFollowers = [];
    // const userPosts = [];
    // const userName = user.get('user_nickname');
    // const userProfile = user.get('user_profile');
    // const userIntro = user.get('user_intro');

    // const dbFollowings = await follows.findAll({ where: { 'follower_id': id }});
    // const dbFollowers = await follows.findAll({ where: { 'following_id': id }});
    // const dbPosts = await posts.findAll({ where: { 'post_user_id': id }});

    // dbFollowings.forEach((row) => userFollowings.push(row.following_id));
    // dbFollowers.forEach((row) => userFollowers.push(row.follower_id));
    // dbPosts.forEach((row) => userPosts.push(row.post_id));

    // res.status(200).json({
    //   name: userName,
    //   profile: userProfile,
    //   intro: userIntro,
    //   followers: userFollowers,
    //   followings: userFollowings,
    //   posts: userPosts
    // });
}));

module.exports = router;