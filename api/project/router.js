// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.get()
        res.json(projects) 
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Projects.create(req.body)
        res.json(newProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router