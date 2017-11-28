var express = require("express");
var server = express();
server.use(express.static("src"))
server.listen(3000);