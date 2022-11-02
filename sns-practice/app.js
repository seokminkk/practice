const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport=require('passport');


dotenv.config();
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const {sequelize} = require('./models')
const passportConfig=require('./passport')// 패스포트인덱스를 실행해줘야함 그래서연결


const app = express();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});
sequelize.sync({force:false})//false면 기본데이터 안건들임 true면기본있던데이터삭제후시작
//alter 는 기조데이터는 유지하고 이제부터새로운컬럼 적용하고싶다.
.then(()=>{
  console.log('db연결성공');
})
.catch((err)=>{
  console.error(err);
});
passportConfig();


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img',express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

//로그인하고나면 쿠키같은것도있고 해서 라우트전에 적용해줘야함즉연결해줘야함
//express  session 보다는 아래에 있어야함
app.use(passport.initialize())
app.use(passport.session())
//이렇게해줘야 (passport.session())가 실행될때 passport/index에서 passport.deserializeUser가실행됨


app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);


app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});