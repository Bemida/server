const userController = require('../DL/Controller/user.controller'),
  auth = require('../Config/auth/auth'),
  bcrypt = require('bcrypt'),
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

const validateUserData = (data) => {
    if (typeof data?.fullName !== "string")
    throw "Invalid name";
    if (typeof data?.password !== "string")
    throw "Invalid password";
    if (
      typeof data?.email &&
      !/^[\w.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data?.email)
    )
    throw "Invalid email";
    return true;
  }


const register = async (data) => {
  validateUserData(data)
  const emailProper = await userController.readOne({ email: data.email });
  if (emailProper)  throw { code: 401, msg: "The user already exists" };
  data.password = bcrypt.hashSync(data.password, SALT_ROUNDS);
  await userController.create(data);
  return "The user has been registered successfully";
};



const login = async (data) => {
  try {
    if (!data.email) throw { code: 400, msg: "email not found" };
    const user = await userController.readOne({ email: data.email }, "+password");
    if (!user) throw { code: 400, msg: "user not found" };
    if (!bcrypt.compareSync(data.password, user.password)) throw { code: 400, msg: "something incorrect" };
    await userController.update(user.email, { lastConnectedDate: new Date() }); // update last login
    const token = await auth.createToken({ email: user.email, id:user._id}); // create new token
    return{
      token: token,
      fullName: user.fullName,
      email: user.email
    }  // return token
  } catch (error) {
    throw { code: 500, msg: "Internal server error" };
  }
}


async function getUser(filter) {
  return await userController.readOne(filter);
  }
  
  async function getAllUsers(filter) {
  return await userController.readMany(filter);
  }

  



module.exports = { register, login, getUser, getAllUsers }






