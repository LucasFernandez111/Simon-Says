const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/datauser", authController.isAuth);

router.put("/updateScore", authController.updateScore);

router.get("/logout", authController.logout);

module.exports = router;
