const express = require("express");

const urlRoute = require("./routers/url");
const connectMongo = require("./connection");

const app = express();
const PORT = 7000;

connectMongo("mongodb://127.0.0.1:27017/url-shortner").then(() =>
  console.log(`MongoDB Connected`)
);

app.use("/url", urlRoute);

app.listen(PORT, () =>
  console.log(`Server Started at http://localhost:${PORT}`)
);
