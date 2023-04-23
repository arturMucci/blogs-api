const express = require('express');
const BlogPost = require('../controllers/blogpost');
const validateToken = require('../middlewares/validateToken');
const validateBlogPost = require('../middlewares/validateBlogPost');
const validatePostEdit = require('../middlewares/validatePostEdit');

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

BlogPostRoutes.put(
  '/:id',
  validateToken,
  validatePostEdit,
  BlogPost.updatePost,
);

module.exports = BlogPostRoutes;
