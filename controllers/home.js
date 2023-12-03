const URL = require("../models/url");

async function handleRedirectURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now()
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
}

module.exports = { handleRedirectURL };
