// build your `Project` model here
const db = require('../../data/dbConfig.js')

function get() {
    return db("projects")
}

function getById(id) {
    return db("projects").where("project_id", id).first()
}

async function create(newProject) {
    const [id] = await db("projects").insert(newProject)
    return getById(id)
}

module.exports = {
    get,
    getById,
    create
}