const postService = require('../service/post.js');
const { getLogger } = require('../utils/logging.js');

class postController {
  async createPost(req, res) {
    try {
      const id = await postService.createpost(req.body);
      res.status(201).json(id);
      getLogger().silly(`post created with id ${id}`);
    } catch (error) {
      getLogger().error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async getPosts(req, res) {
    try {
      const posts = await postService.getposts(userID);
      res.status(200).json(posts);
    } catch (error) {
      getLogger().error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new postController();
