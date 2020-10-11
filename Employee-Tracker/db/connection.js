var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "nasra_user",
    password: "nasra123!",
    database: "employee_db",
});

connection.connect();
module.exports = connection;