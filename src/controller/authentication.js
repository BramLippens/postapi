class authController {
  async login(req, res) {
    try {
      const token = await authService.login(req.body);
      res.status(200).json(token);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
