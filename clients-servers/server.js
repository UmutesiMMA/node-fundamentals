const http = require("http");
const fs = require("fs");
const _ = require('lodash')
const server = http.createServer((req, res) => {
  console.log("request was made");
  const num = _.random(2,45)
  console.log(num)
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
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("location", "/about");
      res.end();
      break;
    default:
      path += "notfound.html";
      res.statusCode = 404;
  }
  //response object
  // console.log(res);
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
