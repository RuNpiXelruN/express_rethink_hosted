const express = require('express')
const router = express.Router()
const fs = require('fs')
const cert = new Buffer(fs.readFileSync('./cert.js', "utf8"))

const config = require('../config.js')
const thinky = require('thinky')(config.connection)
const r = thinky.r

router.get('/', (req, res) => {
  r.db('Users').table('User').run()
  .then((users) => {
    res.json(users)
  })
})

function getUsers(res) {
  r.db('Users').table('User').limit(4)
  .run()
  .then((users) => {
    const x = users
    console.log(x.constructor)
    res.json(users)
  })
}

router.get('/random', (req, res) => {
  getUsers(res)
})

// -----------  to be called from an app externally ------------- //

// function callUsers() {
//   return rp('http://localhost:3000/users/random').then(response => {
//     return response
//   })
// }
//
// callUsers().then((users) => {
//   var usersObject = JSON.parse(users)
//   var cleaners = usersObject.map(user => {
//     return user.name
//   })
//   console.log(cleaners.join(', '))
// })

module.exports = router
