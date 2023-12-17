const URL = require("../models/url");

async function handleHomePage(req, res) {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
}

module.exports = { handleHomePage };
