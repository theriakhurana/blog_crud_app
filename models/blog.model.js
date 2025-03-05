const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
      required: false,
    },

    likes: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "blogApp"
  }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;