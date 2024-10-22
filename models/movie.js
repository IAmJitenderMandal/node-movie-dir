const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  releaseYear: Number,
  rating: Number,
  // genre: String,
  // plot: String,
  // cast: [String],
  // crew: [String],
  // boxOffice: Number,
  // imdbRating: Number,
  // imdbVotes: Number
});

module.exports = mongoose.model("Movie", movieSchema);
