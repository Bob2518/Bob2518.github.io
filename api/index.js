var express = require("express");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/carDB", { useMongoClient: true });
var app = express();
var cors = require("cors");
app.use(cors({ origin: "http://localhost:3001" }));
var bodyparser = require("body-parser");
app.use(bodyparser.json());

var car = require("./model/car");
var router = express.Router();
car.methods(["get", "post", "delete"]);
car.register(router, "/car");
app.use("/", router)


app.listen(3000);



// var carList = [
//     {
//         id: 1,
//         age: 5,
//         registration: "yk10ykm",
//         color: "black",
//         make: "Merc"
//     }
// ];

// app.get("/car", (req, res) => {
//     res.json(carList);
// });


// app.get("/car/:id", (req, res) => {
//     var id = req.params.id;
//     var foundCar = carList.find(car => car.id == id);
//     if (foundCar) {
//         res.json(foundCar);
//     }
//     else {
//         res.sendStatus(404);
//     }
// });

// app.post("/car", (req, res) => {
//     var carToCreate = req.body;
//     if (carList.find(car => car.id == carToCreate.id)) {
//         res.send("Sorry this car exists already");
//     } else {
//         if (isValidCar(carToCreate)) {
//             carList.push(carToCreate);
//             res.json(carToCreate);
//         } else {
//             res.send("Invalid car");
//         }
//     }
// });

// app.delete("/car/:id", (req, res) => {
//     var id = req.params.id;
//     var carToDelete = carList.findIndex(car => car.id == id);
//     if (carToDelete != -1) {
//         carList.splice(carToDelete, 1);
//         res.send("Successfully Deleted Car with ID:" + id);
//     } else {
//         res.send("No such car with that ID");
//     }
// });

// function isValidCar({ id, age, registration, color, make }) {
//     return (id && age && registration && color && make);
// }
