const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(3002, function () {
  console.log("Server running on port 3002");
});

mongoose
  .connect("mongodb://localhost:27017/movies-directory")
  .then(function () {
    console.log("Connected to MongoDB");
  });
