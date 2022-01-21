// build your `Task` model here
const db = require('../../data/dbConfig.js')

async function get() {
    const tasks = await db("tasks as t")
        .leftJoin("projects as p", "t.project_id", "p.project_id")
        .select("t.*", "p.project_name", "p.project_description")
    const newArr = []
    tasks.forEach(each => {
        each.task_completed === 0 ? newArr.push({...each, task_completed: false}) :
        newArr.push({...each, task_completed: true})
    });
    return newArr
}

async function getById(id) {
     const task = await db("tasks").where("task_id", id).first()
     let completed = task.project_completed
     completed === 0 || !completed ? completed = false : completed = true
     console.log({ ...task, task_completed: completed})
    return ({ ...task, task_completed: completed})
}

async function create(newTask) {
    const [task_id] = await db("tasks").insert(newTask)
    return getById(task_id)
}

module.exports = {
    get,
    getById,
    create
}