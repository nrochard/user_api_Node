const dotenv = require('dotenv').config()

const { DB_HOST, DB_USER, DB_DATABASE, DB_PORT } = process.env

const dbHost = DB_HOST;
const dbUser = DB_USER;
const dbDatabase = DB_DATABASE;
const dbPort = DB_PORT;

module.exports = {
    dbUser,
    dbHost,
    dbDatabase,
    dbPort,
}