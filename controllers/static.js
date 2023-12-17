const URL = require("../models/url");

// Rendering Home Page
async function handleHomePage(req, res) {
  if (!req.user) return res.redirect("/login");
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

module.exports = { handleHomePage, handleSignupPage, handleLoginPage };
