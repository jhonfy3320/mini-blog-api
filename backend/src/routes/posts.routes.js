const router = require('express').Router();
const controller = require('../controllers/posts.controller');
const validatePost = require('../middlewares/validatePost.middleware');

router.get('/', controller.getPosts);
router.get('/:id', controller.getPost);
router.get('/author/:authorId', controller.getPostsAuthor);
router.post('/', validatePost, controller.createPost);
router.put('/:id', validatePost, controller.updatePost);
router.delete('/:id', controller.deletePost);

module.exports = router;