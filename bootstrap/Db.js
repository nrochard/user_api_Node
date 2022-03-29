const { Client } = require("pg");
const { dbUser, dbHost, dbDatabase, dbPort } = require('../config/app.js')


// Connexion à la base de données
module.exports = class db {
    constructor() {
        this.client = new Client({
          user: dbUser,
          host: dbHost,
          database: dbDatabase,
          port: dbPort,
        });
        console.log('Connected to database')
        this.client.connect()
        
      }
}


