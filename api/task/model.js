// build your `Task` model here
const db = require('../../data/dbConfig.js')

function get() {
    return db("tasks")
}

function getById(id) {
    return db("tasks").where("task_id", id).first()
}

async function create(newTask) {
    const [id] = await db("tasks").insert(newTask)
    return getById(id)
}

module.exports = {
    get,
    getById,
    create
}