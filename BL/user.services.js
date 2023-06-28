const userController = require("../DL/Controller/user.controller"),
  auth = require("../Config/auth/auth"),
  { sendOrderEmail } = require("../BL/email.services"),
  bcrypt = require("bcrypt"),
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

const validateUserData = (data) => {
  if (typeof data?.fullName !== "string")
    throw { msg: "Invalid name", code: 401 };
  if (
    typeof data?.email !== "string" &&
    !/^[\w.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data?.email)
  )
    throw { msg: "Invalid email", code: 401 };
  if (typeof data?.phoneNumber !== "number")
    throw { msg: "Invalid phone number", code: 401 };
  if (typeof data?.password !== "string")
    throw { msg: "Invalid password", code: 401 };
  if (typeof data?.address !== "string")
    throw { msg: "Invalid address", code: 401 };
  return true;
};

const register = async (data) => {
  validateUserData(data);
  console.log("email...");
  const emailExists = await userController.readOne({ email: data.email });
  console.log(emailExists);
  if (emailExists) throw { code: 401, msg: "The user already exists" };
  data.password = bcrypt.hashSync(data.password, SALT_ROUNDS);
  await userController.create(data);
  return "The user has been registered successfully";
};

const login = async (data) => {
  try {
    validateUserData(data);
    const user = await userController.readUser(
      { email: data.email },
      "+password"
    );
    if (!user) throw { code: 401, msg: "user not found" };
    if (!bcrypt.compareSync(data.password, user.password))
      throw { code: 401, msg: "something incorrect" };
    await userController.update(user.email, { lastConnectedDate: new Date() }); // update last login
    const token = await auth.createToken({ email: user.email, id: user._id }); // create new token
    return { token, fullName: user.fullName, email: user.email }; // return token
  } catch (error) {
    throw { code: 500, msg: "Internal server error" };
  }
};

const createTokenForPasswordReset = async (data) => {
  try {
    validateUserData(data);
    const user = await userController.readOne({ email: data.email });
    if (!user) throw { code: 400, msg: "user not found" };
    const token = await auth.createToken({ email: user.email, id: user._id, });
    return { token, fullName: user.fullName, email: user.email, };
  } catch (error) {
    throw { code: 500, msg: "Internal server error" };
  }
};

async function getUser(filter) {
  validateUserData(filter);
  return await userController.readOne(filter);
}

async function getAllUsers(filter = {}) {
  validateUserData(filter);
  return await userController.readMany(filter);
}

async function changePassword(data) {
  validateUserData(filter);
  return await userController.update({
    email: data.email,
    password: data.password,
  });
}

const sendEmailToChangePassword = async (data) => {
  const result = await sendOrderEmail(
    data.email,
    "change password",
    data.html(data.token)
  );
};
async function getPasswordVerification(data) { }

module.exports = { register, login, getUser, getAllUsers, changePassword };
