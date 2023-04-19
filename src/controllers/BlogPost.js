const { BlogPost } = require('../services');

const addPost = async (req, res, next) => {
  try {
    const createdPost = await BlogPost.addPost(req.body, req.headers.authorization);
    // console.log(createdPost);
    return res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  addPost,
};