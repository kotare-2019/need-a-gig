const express = require('express')
const request = require('superagent')

const apiBaseUrl = 'https://rest.bandsintown.com/'


const router = express.Router()

router.get('/:artist', (req, res) => {
  return request.get(apiBaseUrl + '/artist/' + req.params.artist + '/events').query({ app_id: '2ac02b0f64b829299b77a99a3e54278c' })
    .then(response => {
      const events = response.body
      res.send(events)
    })
})

module.exports = router
