const hardwareModel = require("../Model/furnitureHardware.model")

    async function create(data){
    return await hardwareModel.create(data)
    }
    async function read(filter = {}){
    return await hardwareModel.find(filter)
    }
    async function readOne(filter){
    return await hardwareModel.findOne(filter)
    }
    async function update(filter,data){
    return await hardwareModel.updateOne(filter,data)
    }
    async function del(filter){
        return await hardwareModel.updateOne(filter ,{isActive:false})
    }

module.exports = { create, read, readOne, update, del }    

    