const itemController = require ('../DL/Controller/item.controller')


// const auth = require('../Config/auth/auth')
// const bcrypt = require ('bcrypt')

async function getItem (itemId){
  let item = itemController.readOne({_id:itemId})
  return item
}

async function addItem (data){
    if (!data) throw "missing data"
    let item = itemController.create(data)
    return item 
}

module.exports = {getItem,addItem}

