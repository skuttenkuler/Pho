const express = require("express");

var router = express.Router();
//import Pho
const pho = require("../models/pho.js")

//routes
router.get("/", function (req, res){
    pho.all(function(data) {
        console.log(data)
        var phoObject = {
            pho: data
        };
        console.log(phoObject);
        res.render("index", phoObject);
    });
});

router.post("/api/pho", function(req, res){
    pho.create(["name"], [req.body.name], function(result){
        //send back the ID of new pho
        res.json({id:result.insertId});

    });
});

router.put("/api/pho/:id", function(req, res){
    var condition = "boolean = " + req.params.boolean; 
    console.log("condition", condition);
    pho.update(
        {

            pho: [req.body.name, req.body.boolean]
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
    router.delete("/api/pho/:id", function(req, res) {
        pho.delete(["id"], params.body.id, function(result){
            res.status(200).end();
        });
    });

module.exports = router;