// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.get()
        res.json(tasks) 
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await Tasks.create(req.body)
        res.json(newTask)
    } catch (err) {
        next(err)
    }
})

module.exports = router