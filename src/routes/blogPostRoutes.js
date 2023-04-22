const express = require('express');
const BlogPost = require('../controllers/blogpost');
const validateToken = require('../middlewares/validateToken');
const validateBlogPost = require('../middlewares/validateBlogPost');

const BlogPostRoutes = express.Router();

BlogPostRoutes.get(
  '/',
  validateToken,
  BlogPost.getAll,
);

BlogPostRoutes.get(
  '/:id',
  validateToken,
  BlogPost.getById,
);

BlogPostRoutes.post(
  '/',
  validateToken,
  validateBlogPost,
  BlogPost.addPost,
);

module.exports = BlogPostRoutes;