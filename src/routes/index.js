const express = require('express');
const userController = require('../controller/user.js');
const postController = require('../controller/post.js');

const router = express.Router();

// Stage 1
// User Routes
// Register
router.post('/register', userController.register);
// Login
router.post('/users/login', userController.login);
// Post Routes
// Create Post
router.post('/posts', postController.createPost);
// get all posts of a user
router.get('/posts', postController.getPosts);

module.exports = router;
