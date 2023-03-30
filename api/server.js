// build your server here and require it from index.js

const express = require("express");

const server = express();

server.use(express.json());

const resourceRouter = require("./resource/router");
server.use("/api/resources", resourceRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: "There was an issue with the server",
        message: err.message
    })
})

module.exports = server;