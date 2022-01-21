// build your `Resource` model here
const db = require('../../data/dbConfig.js')

function get() {
    return db("resources")
}

function getById(id) {
    return db("resources").where("resource_id", id).first()
}

async function create(newResource) {
    const [id] = await db("resources").insert(newResource)
    return getById(id)
}

module.exports = {
    get,
    getById,
    create
}