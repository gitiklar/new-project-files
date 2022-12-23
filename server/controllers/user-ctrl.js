const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { isEmailCorrect, isPasswordCorrect } = require("../utils");
const { userService } = require("../services/userService");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const validatePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isEmailCorrect(email) || !isPasswordCorrect(password)) {
      res.status(401).json({
        status: 401,
        type: "error",
        message: "invalid email or password",
      });
    }

    const user = userService.findUserByEmail(email);
    if (!user) {
      res.status(401).json({
        status: 401,
        type: "error",
        message: "user not found",
      });
    } else {
      const validPassword = await validatePassword(password, user.password);
      if (!validPassword) {
        res.status(401).json({
          status: 401,
          type: "error",
          message: "password is incorrect",
        });
      }
    }

    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "10H",
    });

    res.status(200).json({ status: 200, user, accessToken });
  } catch (err) {
    res.status(400).json({
      status: 400,
      type: "error",
      message: `Oops, an error occurred  : ${err.message}`,
    });
  }
};

const getUser = (req, res) => {
  const user = req.user;
  res.status(200).json({ status: 200, user });
};

module.exports = {
  login,
  getUser,
};
