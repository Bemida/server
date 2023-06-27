const templateController = require('../DL/Controller/template.controller')

//This is where you'll write your business logic functions - all API layer functions for registering, logging in, searching, etc. 

//Don't forget to import your authentication! We'll be generating tokens for users here. 
const auth = require('../Config/auth/auth')

//Don't forget our password hashing! We'll use it to encrypt passwords when registering, as well as check passwords when logging in.
const bcrypt = require('bcrypt')

async function sampleFunction() {
  //for example:  let sample = await templateController.readOne({something:something})
  // return sample
}

module.exports = { sampleFunction }



