const express = require('express')
const router = express.Router()


const db = require('../db')

router.post('/', function (req, res) {
  console.log("routes", req.body)

  const user = {
    name:req.body.name,
    city:req.body.city,
  }
  db.saveUser(user)
  res.sendStatus(200)
})

module.exports = router