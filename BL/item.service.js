const itemController = require ('../DL/Controller/item.controller')


// const auth = require('../Config/auth/auth')
// const bcrypt = require ('bcrypt')

// async function getItem (itemId){
//   let item = itemController.readOne({_id:itemId})
//   return item
// }
async function getItemByBarcode (barcode){
  let item = await itemController.readOne({barcode:barcode})
  return item
}
async function getAllItems(){
  let items = await itemController.read()
  return items
}
async function getItemByBarcode (barcode){
  let item = await itemController.readOne({barcode:barcode})
  return item
}
async function updateItem (barcode,data){
  console.log(barcode + data)
  if (!barcode) throw "Missing barcode"
  let item = await itemController.readOne({barcode:barcode})
  if (!item) throw "Item doesn't exist"
  if (!data.name && !data.price && !data.stock && !data.img) throw "missing or incorrect data"
  item = await itemController.update({barcode:barcode}, data)
  let updatedItem = await itemController.readOne({barcode:barcode})
  return updatedItem
}

async function addItem (data){
  let item = await getItemByBarcode(data.barcode)
  if (item) throw "item already exists"
  if (data.price < 0) throw "price must be at least 1"
  if (!data.name) throw "item must include a name"
  if (!data.img) throw "item must include an image"
  if (!data.barcode) throw "item must include unique barcode with numbers only"
  item = await itemController.create(data)
  return item 
}

module.exports = {addItem,getItemByBarcode,getAllItems,updateItem}

// const item1 = {
//   "name": "door handle",
//   "img": "🚪",
//   "stock": "50"

// }
// const go = async ()=>{
//   let item = await addItem(item1)
//   console.log (item)
// }
// go()
