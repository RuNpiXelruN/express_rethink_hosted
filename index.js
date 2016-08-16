const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config({silent: true})

const app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

// --------------------------------------------- Routes

const users = require('./routes/users')
const login = require('./routes/login')
const tests = require('./routes/test')
const posts = require('./routes/posts')

app.use('/users', users)
// app.use('/login', login)
// app.use('/test', tests)
// app.use('/posts', posts)


app.get('/', function(request, response) {
  response.send("Heyyy")
})

// --------------------------------------------- Routes />

app.use((error, request, response, next) => {
  response.status(error.status || 500)
  response.json({ error: error.message })
})

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('App running..')
})
