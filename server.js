const express = require('express');
const dotenv = require('dotenv');
const booksRoutes = require('./routes/booksRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', booksRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Book Management API!');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
