const Projects = require('./model')

const validateProject = async (req, res, next) => {
    try {
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = { validateProject }