const postService = require('../service/post.js');
const { getLogger } = require('../utils/logging.js');

class postController {
  async createPost(req, res) {
    try {
      const post = await postService.createpost(req.session.id, req.body);
      res.status(201).json(post);
      getLogger().silly(`post created for user ${req.session.email}`);
    } catch (error) {
      getLogger().error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async getPosts(req, res) {
    try {
      const posts = await postService.getposts(req.session.id);
      getLogger().silly(`posts fetched for user ${req.session.email}`);
      res.status(200).json(posts);
    } catch (error) {
      getLogger().error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new postController();
