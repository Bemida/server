const userController = require('../DL/Controller/user.controller'),
  auth = require('../Config/auth/auth'),
  bcrypt = require('bcrypt'),
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

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


const register = async (data) => {
  const { fullName, email, password } = data;
  validateUserData([fullName, email, password])
  const emailProper = await userController.readUser({ email: email });
  if (emailProper) {
    throw { code: 400, msg: "The user already exists" };
  }
  data.password = bcrypt.hashSync(data.password, SALT_ROUNDS);
  await userController.createUser(data);
  return "The user has been registered successfully";
};



const login = async (data) => {
  try {
    if (!data.email) {
      throw { code: 400, msg: "email not found" };
    }
    const user = await userController.readUser({ email: data.email }, "+password");

    if (!user) {
      throw { code: 400, msg: "user not found" };
    }
    if (!bcrypt.compareSync(data.password, user.password)) {
      throw { code: 400, msg: "something incorrect" };
    }
    await userController.updateUserByEmail(user.email, { lastLogin: new Date() }); // update last login
    const token = await auth.createToken({ email: user.email }); // create new token
    return token; // return token
  } catch (error) {
    throw { code: 500, msg: "Internal server error" };
  }
}




module.exports = { register, login }






