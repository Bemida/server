const userController = require("../DL/Controller/user.controller"),
  auth = require("../Config/auth/auth"),
  { sendOrderEmail } = require("../BL/email.services"),
  bcrypt = require("bcrypt"),
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

<<<<<<< HEAD
  const validateUserData = (data) => {
    if (data.fullName && typeof data?.fullName !== "string")
      throw { msg: "Invalid name", code: 401 };
    if (
      data.email &&
      !/^[\w.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data?.email)
    )
      throw { msg: "Invalid email", code: 401 };
    if (data.phoneNumber && typeof data?.phoneNumber !== "number")
      throw { msg: "Invalid phone number", code: 401 };
    if (data.password && typeof data?.password !== "string")
      throw { msg: "Invalid password", code: 401 };
    if (data.address && typeof data?.address !== "string")
      throw { msg: "Invalid address", code: 401 };
    return true;
  };
=======
const validateUserData = (data) => {
  if (data.fullName && typeof data?.fullName !== "string")
    throw { msg: "Invalid name", code: 401 };
  if (
    data.email &&
    !/^[\w.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data?.email)
  )
    throw { msg: "Invalid email", code: 401 };
  if (data.phoneNumber && typeof data?.phoneNumber !== "number")
    throw { msg: "Invalid phone number", code: 401 };
  if (data.password && typeof data?.password !== "string")
    throw { msg: "Invalid password", code: 401 };
  if (data.address && typeof data?.address !== "string")
    throw { msg: "Invalid address", code: 401 };
  return true;
};
>>>>>>> 23e4d837c31ce6fe3d6f7a3269c57eb7f94fe6fc

const register = async (data) => {
  try {
    validateUserData(data);
    console.log("email...");
    const emailExists = await userController.readOne({ email: data.email });
    console.log(emailExists);
    if (emailExists) throw { code: 401, msg: "The user already exists" };
    data.password = bcrypt.hashSync(data.password, SALT_ROUNDS);
    await userController.create(data);
    return "The user has been registered successfully";
  } catch (error) {
    throw { code: 401, msg: "Internal server error" };
  }

};

const login = async (data) => {
  try {
    validateUserData(data);
<<<<<<< HEAD
    const user = await userController.readUser({ email: data.email },"+password");
    if (!user) throw { code: 401, msg: "user not found" };
    if (!bcrypt.compareSync(data.password, user.password))
      throw { code: 401, msg: "something incorrect" };
    await userController.update({email: user.email}, { lastConnectedDate: new Date() }); // update last login
=======
    const user = await userController.readOne({ email: data.email }, "+password");
    if (!user) throw { code: 401, msg: "user not found" };
    if (!bcrypt.compareSync(data.password, user.password))
      throw { code: 401, msg: "something incorrect" };
    await userController.update(user.email, { lastConnectedDate: new Date() }); // update last login
>>>>>>> 23e4d837c31ce6fe3d6f7a3269c57eb7f94fe6fc
    const token = await auth.createLoginToken({ email: user.email, id: user._id }); // create new token
    return { token, fullName: user.fullName, email: user.email }; // return token
  } catch (error) {
    throw { code: 401, msg: "Internal server error" };
  }
};

const createTokenForPasswordReset = async (data) => {
  try {
    validateUserData(data);
    const user = await userController.readOne({ email: data.email });
    if (!user) throw { code: 401, msg: "user not found" };
    const token = await auth.createTokenForPasswordChange({ email: user.email, id: user._id, });
<<<<<<< HEAD
    console.log(token);
    // const result = await sendOrderEmail(
    //   user.email,
    //   "Change password",
    //   data.html(data.token)
    //   );
      return { token, fullName: user.fullName, email: user.email, };
=======
    return token;
    const result = await sendOrderEmail(
      user.email,
      "Change password",
      data.html(data.token)
    );
    return "The email was sent successfully";
>>>>>>> 23e4d837c31ce6fe3d6f7a3269c57eb7f94fe6fc
  } catch (error) {
    throw { code: 401, msg: "Internal server error" };
  }
};

const getUser = async (filter) => {
  try {
    validateUserData(filter);
    return await userController.readOne(filter);
  } catch (error) {
    throw { code: 401, msg: "Internal server error" };
  }

}

const getAllUsers = async (filter = {}) => {
  try {
    validateUserData(filter);
    return await userController.readMany(filter);
  } catch (error) {
    throw { code: 401, msg: "Internal server error" };
  }

}

<<<<<<< HEAD

// const sendEmailToChangePassword = async (data) => {
//   const result = await sendOrderEmail(
//     data.email,
//     "change password",
//     data.html(data.token)
//   );
// };

async function getPasswordVerification(data) { 
  try {
    validateUserData(data);
    data.password = bcrypt.hashSync(data.password, SALT_ROUNDS);
    await userController.update({
      email: data.email,
      password: data.password,
    });
    return "The password has been changed successfully"
    
} catch (error) {
    return {msg:"Error updating password",code:401}
}
}

module.exports = { register, login, getUser, getAllUsers,getPasswordVerification, createTokenForPasswordReset };
=======
const getPasswordVerification = async (data) => {
  try {
    validateUserData(data);
    if (data.password !== data.passwordVerification) throw {
      msg: 'Password not the same as the password verification', code: 401
    };
    data.password = bcrypt.hashSync(data.password, SALT_ROUNDS);
    await userController.update({ email: data.email }, { password: data.password });
    return "Password changed successfully";
  } catch (error) {
    throw { code: 401, msg: "Internal server error" };
  }
}

module.exports = { register, login, getUser, getAllUsers, getPasswordVerification, createTokenForPasswordReset };
>>>>>>> 23e4d837c31ce6fe3d6f7a3269c57eb7f94fe6fc
