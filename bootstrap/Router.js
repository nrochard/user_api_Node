const UserController = require('../app/Controllers/UserController.js')

// Router qui redirige vers le controller
module.exports = class router{
    constructor(req, res){
      this.req = req;
      this.res = res;
    }
    //Méthode get
    async get(req, res) {   
      console.log(`Url is ${req.url} and Method is ${req.method}`)      
      res.write(JSON.stringify(JSON.stringify({ message: "Hello From Get!" })))
      const userController = new UserController(this.req, this.res);
      userController.get(this.req, this.res);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(); 
    }
    //Méthode post
    async post(req, res) {    
      console.log(`Url is ${req.url} and Method is ${req.method}`)       
      res.write(JSON.stringify({ message: "Hello From Post" }));
      const userController = new UserController(this.req, this.res);
      userController.post(this.req, this.res);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end();
    }
    //Méthode put
    async put(req, res) {   
      console.log(`Url is ${req.url} and Method is ${req.method}`)        
      res.write(JSON.stringify({ message: "Hello From Put" }));
      const userController = new UserController(this.req, this.res);
      userController.put(this.req, this.res);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(); 
    }
    //Méthode delete
    async delete(req, res) { 
      console.log(`Url is ${req.url} and Method is ${req.method}`)          
      res.write(JSON.stringify({ message: "Hello From Delete" }));
      const userController = new UserController(this.req, this.res);
      userController.delete(this.req, this.res);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end();
    }
}