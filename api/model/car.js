var restful = require("node-restful");
var mongoose = restful.mongoose;
//npm install node-restful

var carSchema = mongoose.Schema({
    age: Number,
    registration: String,
    color: String,
    make: String
});

module.exports = restful.model("Cars", carSchema);