const express = require('express')
const router = express.Router()
const fs = require('fs')
const cert = new Buffer(fs.readFileSync('./cert.js', "utf8"))

const config = require('../config.js')
const thinky = require('thinky')(config.connection)
const r = thinky.r

router.get('/', (req, res) => {
  r.db('Users').table('User')
    .run().then((users) => {
      console.log('Users: ', users)
      res.json(users)
    })
})

module.exports = router
// const express = require('express')
// const router = express.Router()
//
// const thinky = require('thinky')()
// const r = thinky.r
//
// // GET request to /login
// router.get('/', function(req, res, next) {
//     r.db('mf_users').table('users')
//       .run().then((users) => {
//         console.log(users)
//         res.json(users)
//       })
// })
//
// // POST request to /login
// router.post('/', function(req, res, next) {
//     // do something
// })
