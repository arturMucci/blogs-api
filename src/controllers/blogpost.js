const BlogPost = require('../services/blogpost');

const getAll = async (_req, res, next) => {
  try {
    const allPosts = await BlogPost.getAll();
    return res.status(200).json(allPosts);
  } catch (error) {
    console.log(error);
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

module.exports = {
  getAll,
  addPost,
};