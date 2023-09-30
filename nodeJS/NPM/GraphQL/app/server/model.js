const mongoose = require('mongoose');

const book_Schema = new mongoose.Schema({
    id: Number,
    name: String,
    authorId: Number,
});

const author_Schema = new mongoose.Schema({
    id: Number,
    name: String,
    books: [book_Schema],
});

const Book = mongoose.model('books', book_Schema);
const Author = mongoose.model('authors', author_Schema);

module.exports = { Book, Author };
