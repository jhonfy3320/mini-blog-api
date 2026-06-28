/*const validatePost = (req, res, next) => {
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

module.exports = validatePost;*/
const validatePost = (req, res, next) => {

  const {
    title,
    content,
    author_id,
    published
  } = req.body;

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

  if (
    author_id === undefined ||
    author_id === null ||
    Number.isNaN(Number(author_id))
  ) {
    return res.status(400).json({
      success: false,
      message: 'author_id must be numeric'
    });
  }

  if (
    published !== undefined &&
    typeof published !== 'boolean'
  ) {
    return res.status(400).json({
      success: false,
      message: 'published must be boolean'
    });
  }

  next();

};

module.exports = validatePost;