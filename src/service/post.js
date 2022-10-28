const postDAO = require('../dao/post.js');

// TODO: validation
class postService {
  createpost(postDto) {
    const { title, category, content, userId, likes, dislikes } = postDto;
    return postDAO.createpost(title, category, content, userId, likes, dislikes);
  }
  getpost(id) {
    return postDAO.getpost(id);
  }
  updatepost(id, postDto) {
    const { title, category, content, userId, likes, dislikes } = postDto;
    return postDAO.updatepost(title, category, content, userId, likes, dislikes);
  }
  deletepost(id) {
    return postDAO.deletepost(id);
  }

  getpostByUserId(userId) {
    return postDAO.getpostByUserId(userId);
  }
  getpostsByCategory(category) {
    return postDAO.getpostsByCategory(category);
  }
  getposts() {
    return postDAO.getposts();
  }
}

module.exports = new postService();
