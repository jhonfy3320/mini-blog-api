const service = require('../services/comments.service');

exports.getComments = async (req, res, next) => {
  try {
    const data = await service.getComments();
    
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
};

exports.getCommentsPost = async (req, res, next) => {
  try {
    const data = await service.getCommentsPost(req.params.postId);
    
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
};

exports.createComment = async (req, res, next) => {
  try {
    const created = await service.createComment(
      req.body.content,
      req.body.author_id,
      req.body.post_id
    );
    
    res.status(201).json({
      success: true,
      data: created
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const deleted = await service.deleteComment(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }
    
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};