const express = require('express');
const userController = require('../controller/user.js');
const postController = require('../controller/post.js');

const router = express.Router();

router.post('/user', userController.createUser);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);

router.post('/post', postController.createpost);
router.get('/post/', postController.getposts);
router.put('/post/:id', postController.updatepost);
router.delete('/post/:id', postController.deletepost);
router.get('/post/user/:userId', postController.getpostByUserId);
router.get('/post/category/:category', postController.getpostsByCategory);

module.exports = router;
