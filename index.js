const express = require("express");
const path = require("path");
const urlRoute = require("./routers/url");
const shortIdRoute = require("./routers/home");
const staticRoute = require("./routers/static");
const connectMongo = require("./connection");

const app = express();
const PORT = 7000;

connectMongo("mongodb://127.0.0.1:27017/url-shortner").then(() =>
  console.log(`MongoDB Connected`)
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json()); // Middleware to Parse JSON
app.use(express.urlencoded({ extended: false })); // Middleware to Parse Form Data

app.use("/", staticRoute);

app.use("/", shortIdRoute);

app.use("/url", urlRoute);

app.listen(PORT, () =>
  console.log(`Server Started at http://localhost:${PORT}`)
);
