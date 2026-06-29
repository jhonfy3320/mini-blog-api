const router = require('express').Router();
const controller = require('../controllers/comments.controller');
const validate = require('../middlewares/validateComment.middleware');

router.get('/', controller.getComments);
router.get('/post/:postId', controller.getCommentsPost);
router.post('/', validate, controller.createComment);
router.delete('/:id', controller.deleteComment);

module.exports = router;
