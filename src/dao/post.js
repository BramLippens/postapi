const { getKnexInstance, tables } = require('../database/db');
const { v4: uuidv4 } = require('uuid');

class postDAO {
  async createpost(title, category, content, userId, likes, dislikes) {
    const [id] = await getKnexInstance()(tables.post)
      .insert({
        id: uuidv4(),
        title,
        category,
        content,
        userId,
        likes,
        dislikes,
      })
      .returning('*');
    return id;
  }
  async getposts(userId) {
    const posts = await getKnexInstance()(tables.post).select().where('userId', userId);
    return posts;
  }
  async getAllposts() {
    const posts = await getKnexInstance()(tables.post).select();
    return posts;
  }
}

module.exports = new postDAO();
