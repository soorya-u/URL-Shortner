const User = require("../models/user");
const { setUser } = require("../services/auth");

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
      error: 401,
      message: "Invalid Username or Password",
    });

  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}

module.exports = { handleUserSignup, handleUserLogin };
