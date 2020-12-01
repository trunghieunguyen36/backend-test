const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = require('./app')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB is connected!')
  })

const port = process.env.PORT || 3001

const server = require('http').createServer(app)

const io = require('socket.io')(server, {
  pingTimeout: 30000,
})

// io.on('connection', function (socket) {
//   console.log(`${socket} a user connected`)
//   socket.emit('Hello', 'hello from server')
// })

io.on('connection', (socket) => {
  socket.on('addNewBook', (data) => {
    try {
      socket.broadcast.emit('addNewBook', data.data)
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  })
})

server.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
