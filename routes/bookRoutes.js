const express = require('express')
const { getAllBooks, getBook, createBook, updateLike, updateComment } = require('../controllers/bookController')

const bookRouter = express.Router()

bookRouter.route('/').get(getAllBooks).post(createBook)
bookRouter.route('/:id').get(getBook).post(updateLike)
bookRouter.route('/:id/comment').post(updateComment)

module.exports = bookRouter
