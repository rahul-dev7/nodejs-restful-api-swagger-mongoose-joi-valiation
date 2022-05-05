const jwt = require("jsonwebtoken");
const Common = require('../helpers/common')
exports.generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"});
}

exports.generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "20m"})
}


exports.verifyToken = (token) => {
   return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}