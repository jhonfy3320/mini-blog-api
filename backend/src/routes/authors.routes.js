const express = require('express');
const router = express.Router();

const controller = require('../controllers/authors.controller');
const validateAuthor = require('../middlewares/validateAuthor.middleware');

router.get('/', controller.getAuthors);
router.get('/:id', controller.getAuthor);
router.post('/', validateAuthor, controller.createAuthor);
router.put('/:id', validateAuthor, controller.updateAuthor);
router.delete('/:id', controller.deleteAuthor);

module.exports = router;