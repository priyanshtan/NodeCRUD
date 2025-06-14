const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: {
    type: String,
    enum: ["Fiction", "Science", "Biography", "History", "Technology"],
    required: true,
  },
  description: String,
  isbn: String,
  publishDate: Date,
  publisher: String,
  language: String,
  availableCopies: Number,
  coverImageUrl: String,
  location: String,
  inStock: {
    type: String,
    enum: ["Yes", "No"],
    required: true,
  }
}, { timestamps: true });


module.exports = mongoose.model("Book", bookSchema);
