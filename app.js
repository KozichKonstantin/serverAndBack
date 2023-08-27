// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host : "localhost",
//   database : "mastersbookdb",
//   user : "siteFindigBase",
//   password : "humansedrexstep",
//   port : "3306"
// });
// connection.connect(function(err){
//   if(err){
//     return console.log("blya pizdec")
//   }else{
//     console.log("ne pizdec")
//   }
// }
// )
//nodemon app.js
//3306 for sql
const http = require('http');
const fs =require('fs');
const port = 3500;
// http.createServer().listen(3500);
http.createServer(function(request, response){

response.setHeader("Content-Type", "text/html; charset = utf-8")
    if(request.url == "/"){
        response.end("<h2> hahaha </h2>Main");
    }
    else if(request.url == "/card"){
        response.end("Card");
    }else if(request.url == "/server"){
        let file = fs.readFileSync('page.dat')
        response.end(file)
    }
    
}).listen(port, () =>{
    console.log("Server is listening",port)
});