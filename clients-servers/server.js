const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log("request was made");
  //request object
  for(i in req){
    console.log(i)
  }
//   console.log(req.url, req.method);

  //response object
  console.log(res);
  res.setHeader("content-Type", "text/html");
  fs.readFile('./clients-servers/content/index.html',(err,data)=>{
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
