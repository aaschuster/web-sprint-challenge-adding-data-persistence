const express = require("express");

const router = express.Router();

const Resources = require("./model")

router.post("/", (req, res, next) => {
    Resources.insert(req.body)
        .then( newResourceID => {
            Resources.get(newResourceID)
                .then( newResource => res.json(newResource))
                .catch(next);
        })
        .catch(next);
})

router.get("/", (req, res, next) => {
    Resources.get()
        .then( resources => res.json(resources))
        .catch(next);
})

router.get("/:id", (req, res, next) => {
    Resources.get(req.params.id)
        .then( resource => res.json(resource))
        .catch(next);
})

module.exports = router;