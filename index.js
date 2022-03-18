const http = require("http");

const server = http.createServer((req, res) =>{

    if(req.url == "/"){
        res.write("hello");
        res.end();
    }  
    else if(req.url == "/test"){
        res.write("test");
        res.end();
    }  
});

server.listen(3000);

