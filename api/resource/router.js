// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.get()
        res.json(resources) 
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newresource = await Resources.create(req.body)
        res.json(newresource)
    } catch (err) {
        next(err)
    }
})

module.exports = router