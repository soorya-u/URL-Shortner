const URL = require("../models/url");

// Rendering Home Page
async function handleHomePage(req, res) {
  const allUrls = await URL.find({ createdBy: req.user._id });
  return res.render("home", { urls: allUrls });
}

// Rendering Signup Page
function handleSignupPage(req, res) {
  return res.render("signup");
}

// Rendering Login Page
function handleLoginPage(req, res) {
  return res.render("login");
}

// Rendering Admin Page
async function handleAdminPage(req, res) {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
}

module.exports = { handleHomePage, handleSignupPage, handleLoginPage, handleAdminPage };
