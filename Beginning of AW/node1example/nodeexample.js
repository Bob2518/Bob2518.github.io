var express = require("express");

var server = express();

server.get("/", (req, res) => {
    res.send("Hello");
});


server.get("/dogs", (req, res) => {
    res.send("My dog's name is jeff");
});

server.listen(3000);