const db = require("../../data/dbConfig");

function insert(task) {
    return db("tasks").insert(task);
};

async function get(id) {
    if(id) {
        let task = await db("tasks").where("task_id", id).first();
        task = {...task, task_completed: (task.task_completed ? true : false)}
        return Promise.resolve(task);
    }
    let tasks = await db("tasks");
    tasks.forEach( task => {
        task.task_completed = task.task_completed ? true : false;
    })
    return Promise.resolve(tasks);
};

module.exports = {insert, get};