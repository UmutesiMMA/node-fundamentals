const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log("request was made");
  //request object
  
//   console.log(req.url, req.method);
let path = './clients-servers/content/'
switch (req.url){
    case '/':
    path+='index.html'
    break;
    case '/about':
    path+='about.html'
    break;
    default :
    path+='notfound.html'
}
  //response object
  console.log(res);
  res.setHeader("content-Type", "text/html");
  fs.readFile(path,(err,data)=>{
    if(err)throw err
    else{
        res.write(data)
        res.end()
    }
  })
});

server.listen(3000, "localhost", () => {
  console.log("listenning for request on port 3000");
});
