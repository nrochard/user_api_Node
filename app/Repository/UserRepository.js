
const Db = require("../../bootstrap/Db.js")
const User = require("../Models/User.js")

// Query pour la database
module.exports = class UserRepository{
    constructor(req, res) {
        this.db = new Db();
    }
    // Fonction pour récupérer tout les users
    async getAllUsers() {
        let text = `SELECT * FROM users`;
        let values = [];
        this.res = await this.db.query(text, values);
        return this.res;
    }
    // Fonction pour récupérer un user avec ID
    async getUser(id) {
        let text = `SELECT * FROM users WHERE id = ${id}`;
        let values = [user.id];
        this.res = await this.db.query(text, values);
        return this.res;
    }

    // Fonction pour ajouter un user
    async addUser(user){
        let text = `INSERT INTO users (name, email, password, age)
        VALUES ($1, $2, $3, $4)
        RETURNING *`;
        let values = [user.id, user.name, user.email, user.password];
        this.res = await this.db.query(text, values);
        return this.res;
    }

    // Fonction pour modifier un user
    async editUser(user){
      let text = `UPDATE users SET name = $1, email = $2, password = $3 WHERE id = ${user.id} RETURNING *`;
      let values = [user.name, user.email, user.password];
      this.res = await this.db.query(text, values);
      return this.res;
    }

    // Fonction pour supprimer un user
    async deleteUser(id){
        let text = `DELETE FROM users WHERE id = ${id} RETURNING *`;
        let values = [];
        this.res = await this.db.query(text, values);
        return this.res;
    }

}