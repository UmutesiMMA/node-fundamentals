const express = require("express");
const app = express();

const morgan = require("morgan");

const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://phicasso:Ficat%402004%2A@nodeblog.ohkcaan.mongodb.net/";
mongoose
  .connect(dbURI)
  .then(() => app.listen("3000"))
  .catch((err) => console.log(err));
const blogs = [
  { title: "This little life", content: "details go here" },
  {
    title: "Little life 2",
    content: "For more details, read the paragraph below",
  },
  { title: "Little life 3", content: "Read the first one" },
];

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log(req.method);
  next(); //without this, the request is left hanging
});
app.get("/", (req, res) => {
  // res.sendFile('/content/index.html',{root:__dirname})
  console.log("request to home");
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (_, res) => {
  //   res.sendFile("/content/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/about-us", (_, res) => {
  res.status(301).render("about");
});

app.get("/create", (_, res) => {
  res.render("create", { title: "Create blog" });
});
app.use((_, res) => {
  //   res.status(404).sendFile("/content/notfound.html", { root: __dirname });
  res.render("notfound", { title: "404" });
});
