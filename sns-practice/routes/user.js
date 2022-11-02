const express = require('express');

const { isLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) {
      await user.addFollowings(parseInt(req.params.id, 10));
      //addFollowing은 belongsToMany할때 as에 적힌 문자를 바탕으로 시퀄라이즈가 만들어냄
      // addFollowings addFollowing getFollowing setFollowing removeFollowing등등
      //set은 수정이되는데 기존에 등록되있던걸 다제거하고 새로운걸추가해버림 
      
      res.send('success');
    } else {
      res.status(404).send('no user');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;