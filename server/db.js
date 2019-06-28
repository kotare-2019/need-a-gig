const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function saveUser(user, db = connection) {
  return db('users')
    .insert({
      name: user.name,
      city: user.city,
    })
}

module.exports = {
  saveUser
}