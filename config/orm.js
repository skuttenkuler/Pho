var connection = require("../config/connection.js")

module.exports = {

    selectAll: (tableName, cb) => {
        connection.query("SELECT * FROM ??",[tableName],(err,res) =>{
            if(err) throw err;
            cb(res);
        })
    };
    function insertOne(){
        
    };
    function updateOne(){
        
    };
}