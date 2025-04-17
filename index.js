const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3013;
const Blog = require("./models/blog.model.js");
const blogRoutes = require("./routes/blog.route.js");

const path = require("path");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello from Blog API Server");
});

app.use("/blogs", blogRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/blog_app");

const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB connection successful...");
  app.listen(port, () => {
    console.log("Server is running on port 3013");
  });
});