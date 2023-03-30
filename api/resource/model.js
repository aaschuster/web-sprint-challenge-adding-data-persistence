const db = require("../../data/dbConfig");

function insert(resource) {
    return db("resources").insert(resource);
};

function get(id) {
    if(id) {
        return db("resources").where("resource_id", id).first();
    }
    return db("resources");
};

module.exports = {insert, get};