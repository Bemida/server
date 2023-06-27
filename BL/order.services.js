const orderController = require ('../DL/Controller/order.controller')

const auth = require('../Config/auth/auth')
// const bcrypt = require ('bcrypt')

async function getOrder (orderId){
  let order = await orderController.readOne({_id:orderId})
  return order
}

async function addOrder (data){
  if (!data) throw "missing data"
  const order = await orderController.create(data)
  return order
}


module.exports = {getOrder,addOrder}



