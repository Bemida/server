const jwt = require("jsonwebtoken");
const create = (data, secretName, expireTime) => {
  return jwt.sign(data, secretName, { expiresIn: expireTime });
};

<<<<<<< HEAD
const verify = (req, res, secretName) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
   return jwt.verify(token, secretName);
=======
const create = (data, secretName, expireTime) => {
  return jwt.sign(data, secretName, { expiresIn: expireTime });
};

const verify = (req, res, secretName) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    return jwt.verify(token, secretName);
>>>>>>> 23e4d837c31ce6fe3d6f7a3269c57eb7f94fe6fc
  } catch (err) {
    console.log(res);
    res.sendStatus(401)
  }
};

const createLoginToken = async (data) => {
  return create(data, process.env.LOGIN_SECRET, "2M");
};
<<<<<<< HEAD

const verifyLoginToken = async (req, res, next) => {
verify(req, process.env.LOGIN_SECRET);
  next();
};

const createTokenForPasswordChange = async (data) => {
  return create(data, process.env.PASSWORD_VERIFICATION, "15m");
};

const verifyTokenForPasswordChange = async (req, res, next) => {
  verify(req, process.env.PASSWORD_VERIFICATION);
=======
const verifyLoginToken = async (req, res, next) => {
  verify(req, res, process.env.LOGIN_SECRET);
  next();
};
const createTokenForPasswordChange = async (data) => {
  return create(data, process.env.PASSWORD_VERIFICATION, "15m");
};
const verifyTokenForPasswordChange = async (req, res, next) => {
  req.body.email = verify(req, res, process.env.PASSWORD_VERIFICATION).email
>>>>>>> 23e4d837c31ce6fe3d6f7a3269c57eb7f94fe6fc
  next();
};
module.exports = {
  createLoginToken,
  verifyLoginToken,
  createTokenForPasswordChange,
  verifyTokenForPasswordChange,
};