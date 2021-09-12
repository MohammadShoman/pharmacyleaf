const express = require("express");

const userRouter = express.Router();

const { signUp } = require("./../controllers/registration");

userRouter.post("/signup", signUp);

module.exports = userRouter;
