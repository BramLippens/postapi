const UserService = require('../service/user.js');
const { getLogger } = require('../utils/logging.js');

class UserController {
  async createUser(req, res) {
    try {
      const id = await UserService.createUser(req.body);
      res.status(201).json(id);
      getLogger().silly(`User created with id ${id}`);
    } catch (error) {
      // remove in production
      getLogger().error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async getUser(req, res) {
    try {
      const user = await UserService.getUser(req.params.id);
      res.status(200).json(user);
      getLogger().silly(`User ${user.id} retrieved`);
    } catch (error) {
      // remove in production
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async updateUser(req, res) {
    try {
      const id = await UserService.updateUser(req.params.id, req.body);
      res.status(200).json(id);
    } catch (error) {
      // remove in production
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await UserService.getUsers(req.body);
      res.status(200).json(users);
      getLogger().silly(`Users retrieved`);
    } catch (error) {
      // remove in production
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async login(req, res) {
    try {
      const user = await UserService.login(req.body.email, req.body.password);
      if (user) {
        res.status(200).json(user);
        getLogger().silly(`User ${user.id} logged in`);
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      // remove in production
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new UserController();
