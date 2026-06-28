const validatePost = (req, res, next) => {
  const { title, content, author_id } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'title is required'
    });
  }

  if (!content || content.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'content is required'
    });
  }

  if (!author_id) {
    return res.status(400).json({
      success: false,
      message: 'author_id is required'
    });
  }

  next();
};

module.exports = validatePost;