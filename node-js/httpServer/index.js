const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.end("Hello from the Home sides");
    } else if (req.url == "/contact") {
        res.end("Hello from the contact sides")
    } else if (req.url == "/about") {
        res.end("Hello from the aboutUs sides")
    } else if (req.url == "/userapi") {
         fs.readFile(`${__dirname}/userApi/userApi.json` , 'utf-8' , (err , data) => {
            const objData = JSON.parse(data) 
            res.writeHead(200 , {"Content-type" : "application/json"})
            res.end(objData.users[0].firstName)
         })   
    } else {
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1>404 error page. Page doesn't exist.<h1/>");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listning to the port no 8000");
})