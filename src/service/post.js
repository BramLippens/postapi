const postDAO = require('../dao/post.js');

// TODO: validation
class postService {
  createpost(postDto) {
    const { title, category, content, userId, likes, dislikes } = postDto;
    return postDAO.createpost(title, category, content, userId, likes, dislikes);
  }
  getposts(userId) {
    return postDAO.getposts(userId);
  }
}

module.exports = new postService();
