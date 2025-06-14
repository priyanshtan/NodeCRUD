const Books = require("../../Models/Books");

const createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      genre,
      description,
      isbn,
      publishDate,
      publisher,
      language,
      availableCopies,
      coverImageUrl,
      location,
      inStock,
    } = req.body;

    // Create a new book
    let newbook = await Books.create({
      title,
      author,
      genre,
      description,
      isbn,
      publishDate,
      publisher,
      language,
      availableCopies,
      coverImageUrl,
      location,
      inStock,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newbook,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Book not created successfully",
      error: error.message,
    });
  }
};

const getAllBook = async (req, res) => {
  try {
    const book = await Books.find({});
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Books Data found",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Book not found",
      error: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book found",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Book not found",
      error: error.message,
    });
  }
};
const updateBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book updated",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Book not found",
      error: error.message,
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: book
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error while deleting book",
      error: err.message,
    });
  }
};


module.exports = { createBook, getAllBook, getBookById, updateBook,deleteBook };
