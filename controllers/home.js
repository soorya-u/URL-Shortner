const URL = require("../models/url");

// Handling Redirect Function
async function handleRedirectURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
}

// Handling Redirect Function
async function handleHomePage(req, res) {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
}

module.exports = { handleRedirectURL, handleHomePage };
