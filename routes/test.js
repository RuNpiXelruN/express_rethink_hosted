const express = require('express')
const router = express.Router()

// ----------------------------------- Rethink connection

const thinky = require('thinky')({
  host: 'localhost',
  port: 28015,
  db: 'People'
})

const r = thinky.r

// ----------------------------------- Rethink connection

const People = thinky.createModel("People",{
    id: String,
    title: String,
    content: String,
})

// People.ensureIndex('createdAt')

// GET all users' names
router.get('/', ((req, res) => {
  r.db('People').table('People').pluck('name')
    .run().then((people) => {
      res.json(people)
  })
}))


module.exports = router
