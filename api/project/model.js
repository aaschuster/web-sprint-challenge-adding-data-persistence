const db = require("../../data/dbConfig");

function insert(project) {
    return db("projects").insert(project);
};

async function get(id) {
    if(id) {
        let project = await db("projects").where("project_id", id).first();
        project = {...project, project_completed: (project.project_completed ? true : false)}
        return Promise.resolve(project);
    }
    let projects = await db("projects");
    projects.forEach( project => {
        project.project_completed = project.project_completed ? true : false;
    })
    return Promise.resolve(projects);
};

module.exports = {insert, get};