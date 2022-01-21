// build your `Project` model here
const db = require('../../data/dbConfig.js')

async function get() {
    const projects = await db("projects")
    const newArr = []
    projects.forEach(each => {
        each.project_completed === 0 ? newArr.push({...each, project_completed: false}) :
        newArr.push({...each, project_completed: true})
    });
    return newArr
}

async function getById(id) {
    const project = await db("projects").where("project_id", id).first()
    const newArr = []
    project.forEach(each => {
    each.project_completed === 0 ? newArr.push({...each, project_completed: false}) :
    newArr.push({...each, project_completed: true})
});
    return newArr
}

async function create(newProject) {
    const [project_id]  = await db("projects").insert(newProject)
    return getById(project_id)
}

module.exports = {
    get,
    getById,
    create
}