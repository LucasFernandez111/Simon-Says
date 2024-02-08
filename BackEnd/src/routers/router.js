const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

router.post("/register", authController.register);

router.get("/login", authController.login);

router.post("/logout", authController.logout);

module.exports = router;
