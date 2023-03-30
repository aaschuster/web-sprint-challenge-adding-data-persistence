const express = require("express");

const router = express.Router();

const Projects = require("./model")

router.post("/", (req, res, next) => {
    Projects.insert(req.body)
        .then( newProjectID => res.json(newProjectID))
        .catch(next);
})

router.get("/", (req, res, next) => {
    Projects.get()
        .then( projects => res.json(projects))
        .catch(next);
})

router.get("/:id", (req, res, next) => {
    Projects.get(req.params.id)
        .then( project => res.json(project))
        .catch(next);
})

module.exports = router;