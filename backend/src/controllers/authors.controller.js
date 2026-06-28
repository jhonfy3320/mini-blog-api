const service = require('../services/authors.service');

const getAuthors = async (req, res, next) => {
  try {
    const authors = await service.getAllAuthors();
    
    res.status(200).json({
      success: true,
      data: authors
    });
  } catch (error) {
    next(error);
  }
};

const getAuthor = async (req, res, next) => {
  try {
    const author = await service.getAuthorById(req.params.id);
    
    if (!author) {
      return res.status(404).json({
        success: false,
        message: 'Author not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: author
    });
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const author = await service.createAuthor(
      req.body.name,
      req.body.email,
      req.body.bio
    );
    
    res.status(201).json({
      success: true,
      data: author
    });
  } catch (error) {
    next(error);
  }
};

const updateAuthor = async (req, res, next) => {
  try {
    const author = await service.updateAuthor(
      req.params.id,
      req.body.name,
      req.body.email,
      req.body.bio
    );
    
    if (!author) {
      return res.status(404).json({
        success: false
      });
    }
    
    res.status(200).json({
      success: true,
      data: author
    });
  } catch (error) {
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const deleted = await service.deleteAuthor(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({
        success: false
      });
    }
    
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor
};