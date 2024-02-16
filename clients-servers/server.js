const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request was made");
  //request object
  for(i in req){
    console.log(i)
  }
//   console.log(req.url, req.method);

  //response object
  console.log(res);
  res.setHeader("content-Type", "text/plain");
  res.write("Hello world I guess :)");
  res.end();//signals (probably not the right term) to end the request else it will be left hanging.
  console.log(res.getHeaders());
});

server.listen(3000, "localhost", () => {
  console.log("listenning for request on port 3000");
});
