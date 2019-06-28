const express = require('express')
const router = express.Router()


const db = require('../db')

router.post('/', function (req, res) {
  // console.log("routes", req.body)


  db.saveUser(req.body)
    .then(res.sendStatus(200))

  console.log(req.body)
})

module.exports = router