const express = require("express");
const app = express();

const Blog = require("./models/blog.js");
const morgan = require("morgan");

const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://phicasso:Ficat%402004%2A@nodeblog.ohkcaan.mongodb.net/";
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("connection established");
    app.listen("3000");
  })
  .catch((err) => console.log(err));
//   { title: "This little life", content: "details go here" },
//   {
//     title: "Little life 2",
//     content: "For more details, read the paragraph below",
//   },
//   { title: "Little life 3", content: "Read the first one" },
// ];

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log(req.method);
  next(); //without this, the request is left hanging
});
app.get("/blogs", (req, res) => {
  // res.sendFile('/content/index.html',{root:__dirname})
  // console.log("request to home");
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => res.render("index", { title: "Home", blogs: result }))
    .catch((err) => console.log(err));
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

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  console.log(blog);
  blog.save();
  res.redirect("/blogs");
});

app.get("/blogs/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => res.render("details", {blog}))
    .catch((error) => res.redirect("/notfound"));
});

app.delete("/blogs/:id", (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(result=>{
      result.json({redirect:'/blogs'})
    })
    .catch(res.redirect("/notfound"));
});

app.use((_, res) => {
  //   res.status(404).sendFile("/content/notfound.html", { root: __dirname });
  res.render("notfound", { title: "404" });
});
