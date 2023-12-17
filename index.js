// Importing Packages
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// Importing Middlewares
const { restrictToLoggedinUserOnly } = require("./middlewares/auth");

// Importing Routes
const urlRoute = require("./routers/url");
const homeRoute = require("./routers/home");
const staticRoute = require("./routers/static");
const userRoute = require("./routers/user");

// Importing Database Connector
const connectMongo = require("./connection");

// Initialization
const app = express();
dotenv.config();

// Adding Port
const PORT = process.env.PORT || 3000;

// Database Connection
connectMongo(process.env.DATABASE_URL).then(() =>
  console.log(`MongoDB Connected!`)
);

// Setting up Template Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Using Middleware
app.use(express.json()); // Middleware to Parse JSON
app.use(express.urlencoded({ extended: false })); // Middleware to Parse Form Data
app.use(cookieParser()); // Middleware to Parse Cookies

// Defining Routes
app.use("/", staticRoute); // To Render Pages

app.use("/", homeRoute); //Home Route

app.use("/url", restrictToLoggedinUserOnly, urlRoute); // URL Route

app.use("/user", userRoute); // User Route

// Listener
app.listen(PORT, () =>
  console.log(`Server Started at http://localhost:${PORT}`)
);
