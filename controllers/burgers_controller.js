const express = require("express");

var router = express.Router();
//import burger
const burger = require("../models/burger.js")

//routes
router.get("/", function (req, res){
    burger.all(function(data) {
        var bObject = {
            burger: data
        };
        console.log(bObject);
        res.render("index", bObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(["name"], [req.body.name], function(result){
        //send back the ID of new pho
        res.json({id:result.insertId});

    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "boolean = " + req.params.boolean; 
    console.log("condition", condition);
    burger.update(
        {
            burger: req.body.boolean
        },
        condition,
        function(result){
            if ( result.changeRows === 0) {
                //no rows changed
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;