const userModel = require("../Model/user.model");

async function create(data) {
<<<<<<< HEAD
  return await userModel.create(data);
}
async function readOne(filter = {}, projection) {
  return await userModel.findOne({ ...filter, isActive: true }, projection);
}
async function readMany(filter = {}) {
  return await userModel.find({ ...filter, isActive: true });
=======
    return await userModel.create(data)
}
async function readOne(filter = {}, projection) {
    return await userModel.findOne({ ...filter, isActive: true }, projection)
}
async function readMany(filter = {}) {
    return await userModel.find( {...filter,isActive: true })
>>>>>>> 19a6a2bb443b655c03497773d2acf5d306c9fcf5
}
async function update(email, data) {
  return await userModel.updateOne(email, { ...data });
}
async function del() {
  return await userModel.updateOne(email, { isActive: false });
}

module.exports = { create, readOne, readMany, update, del };
