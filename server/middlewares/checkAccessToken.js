const jwt = require("jsonwebtoken");

const { userService } = require("../services/userService");

const checkAccessToken = async (req, res, next) => {
  if (!req.headers["authorization"]) return next();
  const accessToken = req.headers["authorization"].split(" ")[1];
  try {
    const { userId, exp } = await jwt.verify(
      accessToken,
      process.env.JWT_SECRET
    );
    if (exp < Date.now().valueOf() / 1000) {
      return res.status(401).json({
        status: 401,
        type: "error",
        message: "Your session expired Please login again",
      });
    }
    req.user = await userService.findUserByUserId(userId);
    next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      type: "error",
      message: `Your session expired Please login`,
    });
  }
  return next();
};

module.exports = checkAccessToken;
