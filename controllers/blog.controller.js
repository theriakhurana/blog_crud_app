const Blog = require("../models/blog.model");

// Render form to create a new blog
const renderCreateForm = (req, res) => {
  res.render("create-blog");
};

// Display all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    res.render("blog-list", { blogs });  
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Handle blog creation
const createBlog = async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const tagArray = tags ? tags.split(",").map(t => t.trim()) : [];
    await Blog.create({ title, content, author, tags: tagArray });
    res.redirect("/blogs");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Render form to edit a blog
const renderEditForm = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).lean();
    if (!blog) return res.status(404).send({ message: "Blog not found" });

    const tagsString = blog.tags ? blog.tags.join(", ") : "";
    res.render("update-blog", { blog, tagsString });  
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update blog
const updateBlog = async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const tagArray = tags ? tags.split(",").map(t => t.trim()) : [];

    await Blog.findByIdAndUpdate(req.params.id, {
      title,
      content,
      author,
      tags: tagArray
    });

    res.redirect("/blogs");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/blogs");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getBlogs,
  renderCreateForm,
  createBlog,
  renderEditForm,
  updateBlog,
  deleteBlog,
};
