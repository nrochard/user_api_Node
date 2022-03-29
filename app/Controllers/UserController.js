const Db = require("../../bootstrap/Db.js")
const UserRepository = require("../Repository/UserRepository.js")
const User = require("../Models/User.js")

module.exports = class UserController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  async get() {
    const url = this.req.url.split("/");
    const id = url[url.length - 1];
    id === "users" ? 0 : parseInt(id);
    const query = new UserRepository(this.req, this.res);
    if(id == "users"){
      const result = await query.getAllUsers();
    }
    else{
      const result = await query.getUser(id);
    }
    this.res(200, JSON.stringify(result));
  }
  async post(){
    const user = new User;
    const query = new UserRepository(this.req, this.res);
    const result = await query.addUser(user);
    this.res(200, JSON.stringify(result));
  }
  async put(){
    const user = new User;
    const query = new UserRepository(this.req, this.res);
    const result = await query.editUser(user);
    this.res(200, JSON.stringify(result));
    
  }
  async delete(){
    const url = this.req.url.split("/");
    const id = url[url.length - 1];
    const query = new UserRepository(this.req, this.res);
    const result = await query.deleteUser(id);
  }
}