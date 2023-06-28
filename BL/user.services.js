const userController = require('../DL/Controller/user.controller'),
  auth = require('../Config/auth/auth'),
  bcrypt = require('bcrypt'),
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

const validateUserData = (data) => {
  if (typeof data?.fullName !== "string")
    throw { msg: "Invalid name", code: 401 };
  if (typeof data?.password !== "string")
    throw { msg: "Invalid password", code: 401 };
  if (typeof data?.address !== "string")
    throw { msg: "Invalid address", code: 401 };
  if (typeof data?.phoneNumber !== "number")
    throw { msg: "Invalid phone number", code: 401 };
  if (
    typeof data?.email !== "string" && !/^[\w.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data?.email)
  )
    throw { msg: "Invalid email", code: 401 };
  return true;
};

const register = async (data) => {
  validateUserData(data)
  const emailProper = await userController.readOne({ email: data.email });
  if (emailProper) throw { code: 401, msg: "The user already exists" };
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
    const token = await auth.createToken({ email: user.email, id: user._id }); // create new token
    return {
      token: token,
      fullName: user.fullName,
      email: user.email
    }  // return token
  } catch (error) {
    throw { code: 500, msg: "Internal server error" };
  }
}


const createTokenForPasswordReset = async (data) => {
  try {
    if (!data.email) throw { code: 400, msg: "email not found" };
    const user = await userController.readOne({ email: data.email });
    if (!user) throw { code: 400, msg: "user not found" };
    const resetToken = //david function
    await userController.update(user.email, { resetToken: resetToken }); //להוסיף בסכמה resetToken
    const token = await auth.createToken({ email: user.email, id: user._id, resetToken: resetToken });

    return {
      token: token,
      fullName: user.fullName,
      email: user.email
    }; // return token
  } catch (error) {
    throw { code: 500, msg: "Internal server error" };
  }
}

async function getUser(filter) {
  return await userController.readOne(filter);
}

async function getAllUsers(filter) {
  const users = await userController.readMany(filter);
  return users
}

async function changePassword(data) {
  return await userController.update({ email: data.email, password: data.password });
}



module.exports = { register, login, getUser, getAllUsers, changePassword,createTokenForPasswordReset }






