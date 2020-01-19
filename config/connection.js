var mysql = require("mysql");
//SQL connection
var connection = mysqlcreateConnection({
    host: "localhost",
    port: 8080,
    uer:"root",
    password: "password",
    database:"burger_db"
});
//make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting : " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
//export
module.exports = connection;