const express = require("express");
const {
  handleHomePage,
  handleSignupPage,
  handleLoginPage,
  handleAdminPage,
} = require("../controllers/static");
const { restrictTo } = require("../middlewares/auth");

const router = express.Router();

router.get("/", restrictTo(["NORMAL", "ADMIN"]), handleHomePage);
router.get("/signup", handleSignupPage);
router.get("/login", handleLoginPage);
router.get("/admin/urls", restrictTo(["ADMIN"]), handleAdminPage);

module.exports = router;
