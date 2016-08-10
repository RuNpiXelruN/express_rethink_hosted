const express = require('express')
const router = express.Router()

// GET request to /login
router.get('/', function(req, res, next) {
    res.send("This is the users page")
})

// POST request to /login
router.post('/', function(req, res, next) {
    // do something
})

module.exports = router
