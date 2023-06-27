const userModel = require("../model/user.model");

function createUser(data) {
  return userModel.create({ ...data });
}
function readUsers(filter = {}) {
  return userModel.find({ ...filter, isActive: true });
}
function readUser(filter, projection) {
  return userModel.findOne(filter, projection);
}
function updateUserByEmail(email, object) {
  return userModel.updateOne(email, {
    ...object,
    lastConnectedDate: new Date(),
  });
}
function deactivateUser(email) {
  return updateUserByEmail(email, { isActive: false });
}
module.exports = {
  createUser,
  readUsers,
  readUser,
  updateUserByEmail,
  deactivateUser,
};