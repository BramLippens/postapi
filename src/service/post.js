const postDAO = require('../dao/post.js');
const { getLogger } = require('../utils/logging.js');

// TODO: validation
class postService {
  async createpost(userId, postDto) {
    const { title, category, content } = postDto;
    const post = await postDAO.createpost(title, category, content, userId, 0, 0);
    getLogger().info(`Created post: ${post}`);
    return post;
  }
  async getposts(userId) {
    const post = await postDAO.getposts(userId);
    getLogger().info(`Retrieved posts`);
    return post;
  }
}

module.exports = new postService();
