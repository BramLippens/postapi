const postDAO = require('../dao/post.js');

// TODO: validation
class postService {
  createpost(userId, postDto) {
    const { title, category, content } = postDto;
    return postDAO.createpost(title, category, content, userId, 0, 0);
  }
  getposts(userId) {
    return postDAO.getposts(userId);
  }
}

module.exports = new postService();
