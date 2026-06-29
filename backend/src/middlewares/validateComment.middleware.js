const validateComment = (req, res, next) => {
  const { content, author_id, post_id } = req.body;

  if (!content || content.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'content is required'
    });
  }

  if (author_id === undefined || Number.isNaN(Number(author_id))) {
    return res.status(400).json({
      success: false,
      message: 'author_id must be numeric'
    });
  }

  if (post_id === undefined || Number.isNaN(Number(post_id))) {
    return res.status(400).json({
      success: false,
      message: 'post_id must be numeric'
    });
  }

  next();
};

module.exports = validateComment;