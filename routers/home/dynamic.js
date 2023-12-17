const express = require("express");
const { handleRedirectURL } = require("../../controllers/home");

const router = express.Router();

router.get("/:shortId", handleRedirectURL);

module.exports = router;
