const shortid = require("shortid");
const URL = require("../models/url");

// Generating Short URLs
async function handleGenerateShortURL(req, res) {
  const body = req.body;

  if (!body.url)
    return res.status(400).json({
      error: "URL is Required",
    });

  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitedHistory: [],
    createdBy: req.user._id,
  });

  return res.redirect("/");
}

// Getting Analytics of Short URLs
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  console.log(shortId);

  const result = await URL.findOne({ shortId });

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateShortURL,
  handleGetAnalytics,
};
