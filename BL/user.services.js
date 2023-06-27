const userController = require('../DL/Controller/user.controller')
const auth = require('../Config/auth/auth')
const bcrypt = require('bcrypt')
const SALT_ROUNDS= Number(process.env.SALT_ROUNDS)

//This is where you'll write your business logic functions - all API layer functions for registering, logging in, searching, etc. 

//Don't forget to import your authentication! We'll be generating tokens for users here. 

//Don't forget our password hashing! We'll use it to encrypt passwords when registering, as well as check passwords when logging in.

async function sampleFunction() {
  //for example:  let sample = await templateController.readOne({something:something})
  // return sample
}

const validateUserData = (newData) => {
  newData.foreach((value) => {
    if ("fullName" in value && typeof newData.value !== "string")
      return "Invalid name";
    if ("password" in value && typeof newData.value !== "string")
      return "Invalid password";
    if (
      "email" in value &&
      !/^[\w.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)
    )
      return "Invalid email";
    return true;
  });
};


const register = async (data)=> {
  const { fullName, email, password } = data;
  validateUserData([fullName, email, password])
  const emailProper = await userController.readOne({ email: email });
  if (emailProper) {
    throw { code: 400, msg: "The user already exists" };
  }
  data.password = bcrypt.hashSync(data.password, SALT_ROUNDS);
  await userController.create(data);
  return "The user has been registered successfully";
};



const login = async (data) => {
  try {
    if (!data.email) {
      throw { code: 400, msg: "email not found" };
    }
    const user = await userController.readOne({ email: data.email }, "+password");
  
    if (!user) {
      throw { code: 400, msg: "user not found" };
    }
    if (!bcrypt.compareSync(data.password, user.password)) {
      throw { code: 400, msg: "something incorrect" };
    }
    await userController.update(user.email, { lastLogin: new Date() }); // update last login
    const token = await auth.createToken({ email: user.email }); // create new token
    return token; // return token
  } catch (error) {
    throw { code: 500, msg: "Internal server error" };
  }
}




module.exports = {register, login }






