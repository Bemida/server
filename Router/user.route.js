const express = require("express"),
  router = express.Router(),
  userServices = require("../BL/user.services"),
  { sendOrderEmail } = require("../BL/email.services"),
  auth = require("../Config/auth/auth");

router.get("/", async (req, res) => {
  try {
    const result = await userServices.getAllUsers(req.body);
    res.send(result);
  } catch (error) {
    res.status(error.code).send(error.msg);
  }
});

router.get("/user", async (req, res) => {
  try {
    const result = await userServices.getUser(req.body);
    res.send(result);
  } catch (error) {
    res.status(error.code).send(error.msg);
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const result = await userServices.register(req.body);
    res.send(result);
  } catch (error) {
    res.status(error.code).send(error.msg);
  }
});

router.post("/login", auth.verifyLoginToken(), async (req, res) => {
  try {
    const result = await userServices.login(req.body);
    res.send(result);
  } catch (error) {
    res.status(error.code).send(error.msg);
  }
});

// router.put(
//   "/changepassword",
//   auth.createTokenForPasswordChange(), // send email
//   async (req, res) => {
//     const data = req.body;
//     try {
//     } catch (error) {
//       res.status(error.code).send(error.msg);
//     }
//   }
// );

// router.post(
//   "/detectingpasswordchange",
//   auth.verifyCreateTokenForPasswordChange(),
//     async (req, res) => {
//         try {
//             const result = await userServices. // make function
//         } catch (error) {
//             res.status(error.code).send(error.msg);
//         }
//     })

module.exports = router;
