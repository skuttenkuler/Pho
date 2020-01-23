//express
const express = require("express");
//handlebars
const ehb = require("express-handlebars")

//port
const PORT = process.env.PORT || 8080
//app express
const app = express()
//use handlebars
app.engine("handlebars", ehb({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//use static
app.use(express.static("public"));

//routes
const routes = require("./controllers/pho_controller.js")
app.use(routes);

//start Server
app.listen(PORT, function(){
    console.group("Server is listening on port " + PORT)
});