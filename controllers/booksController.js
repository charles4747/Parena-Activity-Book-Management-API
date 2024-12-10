const books = require('../models/booksModel');

const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

const getBooksByGenre = (req, res) => {
  const { genre } = req.params;
  const filteredBooks = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());

  if (filteredBooks.length === 0) {
    return res.status(404).json({ message: `No books found in the genre: ${genre}` });
  }

  res.status(200).json(filteredBooks);
};

module.exports = { getAllBooks, getBooksByGenre };


