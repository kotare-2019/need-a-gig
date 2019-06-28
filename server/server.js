const path = require('path')
const express = require('express')

const extRoutes = require('./public/server/routes/extApi')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/bands', extRoutes)

module.exports = server
