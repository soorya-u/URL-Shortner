const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.SECRET_KEY
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
