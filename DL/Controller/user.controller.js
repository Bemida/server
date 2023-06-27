const userModel = require('../Model/template.model')

async function create(data) {
    return await userModel.create(...data)
}
async function readOne(filter = {}, projection) {
    await userModel.findOne({ ...filter, isActive: true }, projection)
}
async function readMany(filter = {}) {
    await userModel.find(filter, { isActive: true })
}
async function update(email, data) {
    return await userModel.updateOne(email, { ...data })
}
async function del(){
    return await templateModel.updateOne()

}

module.exports={create,read,update,del}