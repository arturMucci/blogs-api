const express = require('express');

const {
  BlogPost,
} = require('../controllers');

const {
  validateToken,
  validateBlogPost,
} = require('../middlewares');

const BlogPostRoutes = express.Router();

BlogPostRoutes.post(
  '/',
  validateToken,
  validateBlogPost,
  BlogPost.addPost,
);

module.exports = BlogPostRoutes;