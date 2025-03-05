const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4100;
const Blog = require("./models/blog.model.js");
const blogRoutes = require("./routes/blog.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from Blog API Server");
});

app.use("/blogs", blogRoutes);

mongoose.connect("mongodb://localhost:27017/API");

const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB connection successful...");
  app.listen(port, () => {
    console.log("Server is running on port 4100");
  });
});
