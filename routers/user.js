const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

// Signup Logic
router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;
