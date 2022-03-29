//Routes en fonction des méthodes de requêtes

const router = require('../bootstrap/router.js')

module.exports = class routes{
    constructor(req, res){
        let url = req.url
        let method = req.method
        switch (method) {
            //Méthode GET
            case "GET":
                if (url === "/users" || url.match(/\/users\/([0-9]+)/)) {
                    const newRouter = new router(req, res);
                    newRouter.get(req, res);
                    res.writeHead(200, { "Content-type": "text/plain" })
                }
                //Gestion des erreurs 404
                else{
                    res.writeHead(404, { "Content-Type": "text/plain" })
                    res.write("File not found")
                    res.end() 
                }
            break;
            //Méthode POST
            case "POST":
                if (url === "/post") {
                    const newRouter = new router(req, res);
                    newRouter.post(req, res);
                    res.writeHead(200, { "Content-type": "text/plain" })
                }
                //Gestion des erreurs 404
                else{
                    res.writeHead(404, { "Content-Type": "text/plain" })
                    res.write("File not found")
                    res.end() 
                }
            break;
            //Méthode PUT
            case "PUT":
                if (url.match(/\/put\/([0-9]+)/)) {
                    const newRouter = new router(req, res);
                    newRouter.put(req, res);
                    res.writeHead(200, { "Content-type": "text/plain" })
                }
                //Gestion des erreurs 404
                else{
                    res.writeHead(404, { "Content-Type": "text/plain" })
                    res.write("File not found")
                    res.end() 
                }
            break;
            //Méthode DELETE
            case "DELETE":
                if (url.match(/\/delete\/([0-9]+)/)) {
                    const newRouter = new router(req, res);
                    newRouter.delete(req, res);
                    res.writeHead(200, { "Content-type": "text/plain" })
                }
                //Gestion des erreurs 404
                else{
                    res.writeHead(404, { "Content-Type": "text/plain" })
                    res.write("File not found")
                    res.end() 
                }
            break;
            //Gestion des erreurs 405
            default:
                res.writeHead(405, { "Content-Type": "text/plain" })
                res.write("Method not allowed")
                res.end()
          }
    }
}