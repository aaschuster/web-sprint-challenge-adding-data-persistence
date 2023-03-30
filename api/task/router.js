const express = require("express");

const router = express.Router();

const Tasks = require("./model")

router.post("/",  (req, res, next) => {
    Tasks.insert(req.body)
        .then( newTaskID => {
            Tasks.get(newTaskID)
                .then( newTask => res.json(newTask))
                .catch(next);
        })
        .catch(next);
})

router.get("/", (req, res, next) => {
    Tasks.get()
        .then( tasks => res.json(tasks))
        .catch(next);
})

router.get("/:id", (req, res, next) => {
    Tasks.get(req.params.id)
        .then( task => res.json(task))
        .catch(next);
})

module.exports = router;