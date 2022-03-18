const http = require("http");
const Db = require("./boostrap/Db");

const server = http.createServer((req, res) =>{

    if(req.url == "/"){
        const db = new Db();
        db.connect();
        res.write("hello");
        res.end();
    }  
    else if(req.url == "/get"){
        res.write("GET");
        res.end();
    }  
    else if(req.url == "/post"){
        res.write("post");
        res.end();
    }  
    else if(req.url == "/put"){
        res.write("put");
        res.end();
    }  
    else if(req.url == "/post"){
        res.write("delete");
        res.end();
    }  
    else{
        res.write("Not found");
        res.end();
    }
});

server.listen(3000);

