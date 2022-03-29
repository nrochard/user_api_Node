const http = require("http");
const routes = require('./routes/index.js')


//Lancement du serveur
const server = http.createServer((req, res) =>{
    console.log("Server is working")
    const newRoutes = new routes(req, res);
});

//Sur le port 3000
server.listen(3000);

