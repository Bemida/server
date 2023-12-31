const express = require("express"),
  router = express.Router(),
  userServices = require("../BL/user.services"),
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
    const result = await userServices.register(req.body);
    res.send(result);
  } catch (error) {
    res.status(error.code).send(error.msg);
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await userServices.login(req.body);
    res.send(result);
  } catch (error) {
    res.status(error.code).send(error.msg);
  }
});

router.put("/changepassword",
  async (req, res) => {
    try {
      const result = await userServices.createTokenForPasswordReset(req.body);
      res.send(result);
    } catch (error) {
      res.status(error.code).send(error.msg);
    }
  }
);

router.post(
  "/detectingpasswordchange", auth.verifyTokenForPasswordChange,
  async (req, res) => {
    try {
      const result = await userServices.getPasswordVerification(req.body)
      res.send(result);
    } catch (error) {
      res.status(error.code).send(error.msg);
    }
  })

module.exports = router;
