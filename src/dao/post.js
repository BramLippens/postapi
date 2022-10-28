const { getKnexInstance, tables } = require('../database/db');
const { v4: uuidv4 } = require('uuid');

class postDAO {
  async createpost(title, category, content, userId, likes, dislikes) {
    const [id] = await getKnexInstance()(tables.post).insert({
      id: uuidv4(),
      title,
      category,
      content,
      userId,
      likes,
      dislikes,
    });
    return id;
  }

  async getpostById(id) {
    const post = await getKnexInstance()(tables.post).where({ id }).first();
    return post;
  }

  async getpostByUserId(userId) {
    const posts = await getKnexInstance()(tables.post).where({ userId });
    return posts;
  }

  async getpostsByCategory(category) {
    const posts = await getKnexInstance()(tables.post).where({ category });
    return posts;
  }

  async getposts() {
    const posts = await getKnexInstance()(tables.post);
    return posts;
  }

  async updatepost(id, title, category, content, userId, likes, dislikes) {
    await getKnexInstance()(tables.post).where({ id }).update({
      title,
      category,
      content,
      userId,
      likes,
      dislikes,
    });
  }

  async deletepost(id) {
    await getKnexInstance()(tables.post).where({ id }).del();
    return id;
  }
}

module.exports = new postDAO();
