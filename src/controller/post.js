const postService = require('../service/post.js');
const { getLogger } = require('../utils/logging.js');

class postController {
  async createpost(req, res) {
    try {
      const id = await postService.createpost(req.body);
      res.status(201).json(id);
      getLogger().silly(`post created with id ${id}`);
    } catch (error) {
      getLogger().error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async updatepost(req, res) {
    try {
      const id = await postService.updatepost(req.params.id, req.body);
      res.status(200).json(id);
    } catch (error) {
      // remove in production
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async deletepost(req, res) {
    try {
      const id = await postService.deletepost(req.params.id);
      res.status(200).json(id);
    } catch (error) {
      // remove in production
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getpostByUserId(req, res) {
    try {
      const posts = await postService.getpostByUserId(req.params.userId);
      res.status(200).json(posts);
    } catch (error) {
      // remove in production
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async getpostsByCategory(req, res) {
    try {
      const posts = await postService.getpostsByCategory(req.params.category);
      res.status(200).json(posts);
    } catch (error) {
      // remove in production
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getposts(req, res) {
    try {
      const posts = await postService.getposts();
      res.status(200).json(posts);
    } catch (error) {
      // remove in production
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new postController();
