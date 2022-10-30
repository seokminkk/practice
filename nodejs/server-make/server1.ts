import http from 'node:http'

const server =http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  res.write('<h1>hello node!<h1>');
  res.write('<p>hello server!<p>');
  res.end('hello seokmin!');

})
  .listen(8080);

server.on('listening',()=>{
  console.log('8080서버대기중임')
} );
server.on('error',(error)=>{
  console.error(error)
} );

