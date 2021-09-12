const loginModel = require("./../../db/models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginModel.findOne({ email });
    if (!user) {
      res.status(404);
      res.json({ message: "The email doesn't exist", status: 404 });
      return;
    }
    const valid = await bcrypt.compare(password, user.password);

    if (valid) {
      const payload = {
        userId: user._id,
      };
      const options = {
        expiresIn: "100h",
      };
      const token = jwt.sign(payload, "admin", options);
      res.status(200);
      res.json({ token });
      return;
    }
    res.status(403);
    res.json({
      message: "The password you’ve entered is incorrect",
      status: 403,
    });
    return;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = {
  login,
};
