var mysql = require("mysql");
var connection;
//SQL connection
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user:"root",
        password: "password",
        database:"pho_db"
    });
};

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