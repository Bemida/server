const templateModel = require ('../Model/template.model')

//This is where you'll write your CRUD functions for the database - Create, Read, Update, Delete


async function create(data){
    return await templateModel.create(data)
}
async function read(filter = {}){
await templateModel.find(filter)
}
async function update(){
return await templateModel.updateOne()
}
async function del(){
    return await templateModel.updateOne()

}

module.exports={create,read,update,del}