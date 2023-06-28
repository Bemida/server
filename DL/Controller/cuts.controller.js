const cutsModel = require ('../Model/cuts.model')


async function create(data){
    return await cutsModel.create(data)
}
async function read(filter = {}){
    return await cutsModel.find(filter)
}
async function readOne(filter = {},prog){
    return await cutsModel.findOne(filter,prog)
}
async function update(){
    return await cutsModel.updateOne()
}
async function del(){
    return await cutsModel.updateOne()

}

module.exports={create,read,update,del}