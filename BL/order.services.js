const orderController = require ('../DL/Controller/order.controller')

// const auth = require('../Config/auth/auth')
// const bcrypt = require ('bcrypt')

async function getOrder (orderId){
  if (!orderId) throw "missing order id for the search"
  let order = await orderController.readOne({_id:orderId})
  return order
}

async function addOrder (data){
  if (!data) throw "missing data"
  if (!data.width) throw "Please select width"
  if (!data.height) throw "Please select height"
  if (!data.depth) throw "Please select depth"
  if (!data.color) throw "Please select color"
  const order = await orderController.create(data)
  return order
}

async function updateOrder (orderId,data){
  if (!orderId) throw "missing order id for the search"
  let order = await orderController.update({_id:orderId},data)
  return order
}

module.exports = {getOrder,addOrder,updateOrder}



