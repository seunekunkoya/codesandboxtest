const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

var cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
require("dotenv").config();

const mongoURI =
  process.env.NODE_ENV !== "test"
    ? process.env.MONGO_ATLAS_PW
    : process.env.MONGO_ATLAS_TEST;

mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("MongoDB connection established successfully");
});
mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error. Please make sure MongoDB is running.");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("images")));
