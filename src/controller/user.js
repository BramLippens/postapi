const UserService = require('../service/user.js');
const { getLogger } = require('../utils/logging.js');

class UserController {
  async register(req, res) {
    try {
      const id = await UserService.register(req.body);
      res.status(201).json(id);
      getLogger().silly(`User created with id ${id}`);
    } catch (error) {
      getLogger().error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async login(req, res) {
    try {
      const userData = await UserService.login(req.body.email, req.body.password);
      if (userData) {
        res.status(200).json(userData);
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      getLogger().error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new UserController();
