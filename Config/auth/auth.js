const jwt = require("jsonwebtoken");
const create = (data, secretName, expireTime) => {
  return jwt.sign(data, secretName, { expiresIn: expireTime });
};

const verify = (req, res, secretName) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
   return jwt.verify(token, secretName);
  } catch (err) {
    console.log(res);
    res.sendStatus(401)
  }
};

const createLoginToken = async (data) => {
  return create(data, process.env.LOGIN_SECRET, "2M");
};

const verifyLoginToken = async (req, res, next) => {
verify(req, process.env.LOGIN_SECRET);
  next();
};

const createTokenForPasswordChange = async (data) => {
  return create(data, process.env.PASSWORD_VERIFICATION, "15m");
};

const verifyTokenForPasswordChange = async (req, res, next) => {
  verify(req, process.env.PASSWORD_VERIFICATION);
  next();
};
module.exports = {
  createLoginToken,
  verifyLoginToken,
  createTokenForPasswordChange,
  verifyTokenForPasswordChange,
};