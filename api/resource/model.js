const db = require("../../data/dbConfig");

function insert(resource) {
    return db("resources").insert(resource);
};

function get() {
    return db("resources");
};

module.exports = {insert, get};