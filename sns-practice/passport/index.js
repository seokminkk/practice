const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
  //req login 한게일로옴
  passport.serializeUser((user, done) => {
    done(null, user.id);//세션에 user의 id만저장
    //다시authjs로감 
  });


  //deserializeUser 여기서 쿠키같은거받으면 다시 풀정보보여줌
  //req user는 deserializeUser여기서 생성됨
  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
      include:[{
        model: User,
        attributes:['id','nick'],
        as: 'Followers',
      },{
        model:User,
        attributes:['id','nick'],
        as: 'Followings',
      
      }],
    })

      .then(user => done(null, user))//req.user정보가나옴 req.isAuthenticated()는 true가나옴
      .catch(err => done(err));
  });

  local();
  kakao();
};