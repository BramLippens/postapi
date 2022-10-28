const express = require('express');
const userController = require('../controller/user.js');
const postController = require('../controller/post.js');

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.post('/users/login', userController.login);

router.post('/post', postController.createpost);
router.get('/post/', postController.getposts);
router.put('/post/:id', postController.updatepost);
router.delete('/post/:id', postController.deletepost);
router.get('/post/user/:userId', postController.getpostByUserId);
router.get('/post/category/:category', postController.getpostsByCategory);

module.exports = router;
