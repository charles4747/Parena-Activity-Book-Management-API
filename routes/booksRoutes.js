// routes/booksRoutes.js

const express = require('express');
const { getAllBooks, getBooksByGenre } = require('../controllers/booksController');
const router = express.Router();


router.get('/books', getAllBooks);


router.get('/books/genre/:genre', getBooksByGenre);

module.exports = router;
