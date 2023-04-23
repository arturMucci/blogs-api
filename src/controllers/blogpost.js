const BlogPost = require('../services/blogpost');

const getAll = async (_req, res, next) => {
  try {
    const allPosts = await BlogPost.getAll();
    return res.status(200).json(allPosts);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const postById = await BlogPost.getById(req.params.id);
    return res.status(200).json(postById);
  } catch (error) {
    return next(error);
  }
};

const addPost = async (req, res, next) => {
  try {
    const createdPost = await BlogPost.addPost(req.body, req.headers.authorization);
    return res.status(201).json(createdPost);
  } catch (error) {
    return next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const updatedPost = await BlogPost.updatePost(req.body, req.params.id, req.headers.authorization);
    return res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getAll,
  getById,
  addPost,
  updatePost,
};