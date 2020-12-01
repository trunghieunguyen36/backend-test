const Book = require('../models/bookModel')
const factory = require('./handlerFactory')
const catchAsync = require('../utils/catchAsyns')

exports.getAllBooks = factory.getAll(Book)

exports.getBook = factory.getOne(Book, { path: '' })

exports.createBook = factory.createOne(Book)

exports.updateLike = catchAsync(async (req, res, next) => {
  const data = await Book.findByIdAndUpdate(req.params.id, { $inc: { likeCount: 1 } })

  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  })
})

exports.updateComment = catchAsync(async (req, res, next) => {
  const data = await Book.findByIdAndUpdate(req.params.id, { $push: { comments: req.body } })

  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  })
})
