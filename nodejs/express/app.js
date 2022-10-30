const cookieParser = require('cookie-parser');
const express=require('express');
const morgan = require('morgan');
const path = require('path')

const app =express();

app.set('port',process.env.PORT || 3000);

app.use((req,res,next)=>{
  console.log('모든요청에 실행')
  next();
})

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))//true면qs,false면 querystring써진다


app.get('/',(req,res)=>{
  // req.cookies
  // res.cookie('name',encodeURIComponent(name),{
  //   expires:new Date(),
  //   httpOnly:true,
  //   path:'/',
  // })
  req.body
  res.sendFile(path.join(__dirname,'index.html'));
  // res.send('안녕')
  // res.json({'wpdltms':'w제이슨'})
  // 한번의 send만보낼수있다.여러개 있음 에러남
});

app.post('/',(req,res)=>{
  res.send('ffkfk')
})
app.get('/category/:name',(req,res)=>{
  res.send(`hello ${req.params.name}`)
})

app.get('/about',(req,res)=>{
  res.send('frfr');
});

app.use((req,res,next)=>{
  res.status(404).send('404에러')
})

app.use((err,req,res,next)=>{
  console.error(err);
  res.send('에러낫음')
})

app.listen(app.get('port'),()=>{
  console.log('express start!')
})