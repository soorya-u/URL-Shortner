const URL = require("../models/url");

async function handleRedirectURL(req, res) {
  const shortId = req.params.shortId;
  console.log(shortId)
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
  console.log(entry)
  res.redirect(entry.redirectURL);
}

module.exports = { handleRedirectURL };
