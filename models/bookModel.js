const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A book must have name'],
  },
  type: {
    type: String,
    require: [true, 'A book must have type'],
  },
  imageUrl: {
    type: String,
    default: 'https://seattletarp.com/wp-content/uploads/2016/07/imageComingSoon.jpg',
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      name: String,
      email: String,
      comment: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
