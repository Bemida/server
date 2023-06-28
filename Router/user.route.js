const express = require('express'),
    router = express.Router(),
    userServices = require('../BL/user.services');

router.get("/", async (req, res) => {
    try {
        const result = await userServices.getAllUsers(req.body);
        res.send(result);
    } catch (error) {
        res.status(error.code || 402).send(error.msg || error);
    }
});

router.get("/user", async (req, res) => {
    try {
        const result = await userServices.getUser(req.body);
        res.send(result);
    } catch (error) {
        res.status(error.code || 402).send(error.msg || error);
    }
});

router.post("/register", async (req, res) => {
    try {
        const result = await userServices.register(req.body);
        res.send(result);
    } catch (error) {
        res.status(error.code || 402).send(error.msg || error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const result = await userServices.login(req.body);
        res.send(result);
    } catch (error) {
        res.status(error.code || 402).send(error.msg || error);
    }
});

router.post('/changepassword', async (req, res) => {
    try {
        const result = await userServices.changePassword(req.body);
        res.send(result);
    } catch (error) {
        res.status(error.code || 402).send(error.msg || error);
    }
});

module.exports = router