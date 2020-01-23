var connection = require("../config/connection.js")

module.exports = {

    selectAll: (tableName, cb) => {
        connection.query("SELECT * FROM ??",[tableName],(err,res) =>{
            if(err) throw err;
            cb(res);
        });
    },
    insertOne: (tableName,newData,cb) => {
        connection.query("INSERT INTO ?? SET ?",[tableName,newData], (err,res)=>{
            if(err) throw err
            cb(res);
        });
    },
    updateOne: (tableName,newData,condition,cb) => {
        connection.query("UPDATE ?? SET ? WHERE ?", [tableName, newData, condition], (err,res)=> {
            if(err) throw err;
            cb(res);
        });
    },
    deleteOne: (tableName,condition, cb) => {
        connection.query("DELETE FROM ?? WHERE ?",[tableName,condition], (err,res) => {
            if(err) throw err;
            cb(res);
        });
    },
}