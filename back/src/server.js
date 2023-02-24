const http = require('http');
const characters = require('./utils/data')

const PORT = 3001;

const server = http.createServer((req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");


    if(req.url.includes('rickandmorty/character')){
      const reqID = req.url.split("/").pop();

      const char = characters.filter((el) => el.id === Number(reqID));
      if (char.length > 0) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(char[0]));
        return;
      }
    }
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("json not found");
    
}).listen(PORT, 'localhost');

module.exports = server;