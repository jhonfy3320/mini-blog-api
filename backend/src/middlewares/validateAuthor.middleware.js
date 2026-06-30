const validator = require('validator');

const validateAuthor = (req, res, next) => {
  //console.log('AUTHOR VALIDATOR EXECUTED');
  const { name = '', email = '' } = req.body || {};

  if (name.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'name is required'
    });
  }

  if (email.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'email is required'
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      message: 'invalid email'
    });
  }

  next();
};

module.exports = validateAuthor;