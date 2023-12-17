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
  try {
    res.redirect(entry.redirectURL);
  } catch (err) {}
}

module.exports = { handleRedirectURL };
