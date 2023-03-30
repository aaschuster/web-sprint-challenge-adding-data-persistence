const express = require("express");

const router = express.Router();

const Resources = require("./model")

router.post("/", (req, res, next) => {
    Resources.insert(req.body)
        .then( resource => res.json(resource))
        .catch(next);
})

router.get("/", (req, res, next) => {
    Resources.get()
        .then( resources => res.json(resources))
        .catch(next);
})

module.exports = router;