const User = require("../models/user");

// Handling SignUp
async function handleUserSignup(req, res) {
  const { firstName, lastName, email, password } = req.body;
  await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  return res.redirect("/");
}

// Handling Login
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });
  return res.redirect("/");
}

module.exports = { handleUserSignup, handleUserLogin };