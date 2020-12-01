const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bookRouter = require('./routes/bookRoutes')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(bodyParser.json())

app.use('/api/books', bookRouter)

module.exports = app
