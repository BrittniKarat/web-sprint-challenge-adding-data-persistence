// build your server here and require it from index.js
const express = require('express');
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const actionsRouter = require('./task/router')

const server = express();
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/actions', actionsRouter)

server.use(express.json())

server.use('*', (req, res) => {
    res.status(404).json({ message: `${req.method} ${req.baseUrl} is not a valid address`})
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: ` Error: ${err.message}`})
})

module.exports = server;