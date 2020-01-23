var mysql = require("mysql");
//SQL connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user:"root",
    password: "password",
    database:"pho_db"
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