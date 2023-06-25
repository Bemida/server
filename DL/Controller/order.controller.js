const orderModel = require ('../Model/order.model')

//This is where you'll write your CRUD functions for the database - Create, Read, Update, Delete


async function create(data){
    return await orderModel.create(data)
}
async function read(filter = {}){
await orderModel.find(filter)
}
async function readOne(filter = {}){
    await orderModel.findOne(filter)
}
async function update(){
return await orderModel.updateOne()
}
async function del(){
    return await orderModel.updateOne()
}

module.exports={create,read,readOne,update,del}