//Ne sert plus

const mysql = require('mysql');
const dotenv = require('dotenv').config()

const {DB_HOST, DB_USER, DB_PORT, DB_NAME, DB_PASSWORD} = process.env

// Connexion à la base de données MySQL
module.exports = class Db {
    connection = mysql.createConnection({
        host     : DB_HOST,
        user     : DB_USER,
        port     : DB_PORT,
        password : DB_PASSWORD,
        database : DB_NAME
    });
    connect() {
        this.connection.connect(function(err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                return;
            }
            console.log('Connected to database');
        });
    }
    query(sql){
        this.connection.query(sql, function (err, rows, fields) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                return;
            }
            return rows;
    })
    }
}