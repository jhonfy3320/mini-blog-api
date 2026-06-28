const service = require('../services/posts.service');

const execute = (handler) => async (req, res, next) => {
  try {
    await handler(req, res);
  } catch (error) {
    next(error);
  }
};

exports.getPosts = execute(async (req, res) => {
  const data = await service.getAllPosts();
  
  res.status(200).json({
    success: true,
    data
  });
});

exports.getPost = execute(async (req, res) => {
  const data = await service.getPostById(req.params.id);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: 'Post not found'
    });
  }

  res.status(200).json({
    success: true,
    data
  });
});

exports.getPostsAuthor = execute(async (req, res) => {
  const data = await service.getPostsByAuthor(req.params.authorId);
  
  res.status(200).json({
    success: true,
    data
  });
});

exports.createPost = execute(async (req, res) => {
  const created = await service.createPost(...Object.values(req.body));
  
  res.status(201).json({
    success: true,
    data: created
  });
});

exports.updatePost = execute(async (req, res) => {
  const updated = await service.updatePost(
    req.params.id,
    ...Object.values(req.body)
  );
  
  res.status(200).json({
    success: true,
    data: updated
  });
});

exports.deletePost = execute(async (req, res) => {
  await service.deletePost(req.params.id);
  
  res.status(204).send();
});