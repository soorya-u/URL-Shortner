const URL = require("../models/url");

// Rendering Home Page
async function handleHomePage(req, res) {
  const allUrls = await URL.find({});
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
