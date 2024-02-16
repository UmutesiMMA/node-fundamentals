const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("request was made");
  //request object

  //   console.log(req.url, req.method);
  let path = "./clients-servers/content/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "notfound.html";
      res.statusCode = 400;
  }
  //response object
  console.log(res);
  res.setHeader("content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    else {
      // res.write(data)
      // res.end()
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listenning for request on port 3000");
});
