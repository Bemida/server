const cutsController = require ('../DL/Controller/cuts.controller')

const auth = require('../Config/auth/auth')
const bcrypt = require ('bcrypt')

async function createCutList (){
  let list = await cutsController.create({data})
   return list
}

module.exports = {createCutList}



