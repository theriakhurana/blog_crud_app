const express = require("express");
const router = express.Router();
const {
  getBlogs,
  renderCreateForm,
  createBlog,
  renderEditForm,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

// View all blogs
router.get("/", getBlogs); // → Renders blog-list.hbs

// Render create form
router.get("/create", renderCreateForm);

// Handle blog creation
router.post("/create", createBlog);

// Render edit form
router.get("/edit/:id", renderEditForm);

// Handle update
router.post("/update/:id", updateBlog);

// Handle deletion
router.post("/delete/:id", deleteBlog);

module.exports = router;
