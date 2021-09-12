const usersModel = require("./../../db/models/admin");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const pass = await bcrypt.hash(password, 10);
  const user = new usersModel({
    firstName,
    lastName,
    email,
    password: pass,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  signUp,
};
