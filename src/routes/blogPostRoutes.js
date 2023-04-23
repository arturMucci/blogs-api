const express = require('express');
const BlogPost = require('../controllers/blogpost');
const validateToken = require('../middlewares/validateToken');
const validateBlogPost = require('../middlewares/validateBlogPost');
const validatePostEdit = require('../middlewares/validatePostEdit');
// const validateSameUser = require('../middlewares/validateSameUser');

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
  // validateSameUser,
  validatePostEdit,
  BlogPost.updatePost,
);

BlogPostRoutes.delete(
  '/:id',
  validateToken,
  // validateSameUser,
  BlogPost.deletePost,
);

module.exports = BlogPostRoutes;
