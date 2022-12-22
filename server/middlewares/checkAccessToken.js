const jwt = require("jsonwebtoken");

const checkAccessToken = async (req, res, next) => {
  return next();
};

module.exports = checkAccessToken;
