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

    let tasks = await db("tasks as t")
        .select(
            "task_id", 
            "task_description", 
            "task_notes", 
            "task_completed", 
            "project_name", 
            "project_description")
        .leftJoin("projects as p", "p.project_id", "t.project_id");

    tasks.forEach( task => {
        task.task_completed = task.task_completed ? true : false;
    })
    return Promise.resolve(tasks);
};

module.exports = {insert, get};