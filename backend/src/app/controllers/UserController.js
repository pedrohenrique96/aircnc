const User = require("../models/User");

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();
