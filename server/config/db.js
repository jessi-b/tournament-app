const mysql = require('mysql')

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "epicodus",
database:"tournament_app" 
})

module.exports = db;