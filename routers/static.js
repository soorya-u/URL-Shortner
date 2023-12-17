const express = require("express");
const { handleHomePage } = require("../controllers/static");

const router = express.Router();

router.get("/", handleHomePage);

module.exports = router;
