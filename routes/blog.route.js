const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.post("/", createBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
