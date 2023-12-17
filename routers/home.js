const express = require("express");
const { handleRedirectURL, handleHomePage } = require("../controllers/home");

const router = express.Router();

router.get("/", handleHomePage);

router.get("/redirect/:shortId", handleRedirectURL);

module.exports = router;
