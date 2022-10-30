import http from 'node:http'
import fs from 'node:fs/promises'



const server =http.createServer(async(req,res)=>{
  try{

    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    const data= await fs.readFile('./server2.html')
    res.end(data);
  } catch(error){
    if(error instanceof Error){
    console.error(error);
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
    res.end(error.message)
    }
  }
})
  .listen(8080);

server.on('listening',()=>{
  console.log('8080서버대기중임')
} );
server.on('error',(error)=>{
  console.error(error)
} );

