const express = require('express');
const userController = require('../controller/user.js');
const postController = require('../controller/post.js');
const { requireAuth } = require('../utils/auth.js');

const router = express.Router();

// Stage 1
// User Routes
// Register
router.post('/register', userController.register);
// Login
router.post('/login', userController.login);
// Post Routes
// Create Post
router.post('/post', requireAuth, postController.createPost);
// get all posts of a user
router.get('/post', requireAuth, postController.getPosts);

module.exports = router;
