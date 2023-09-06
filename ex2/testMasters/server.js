const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const morgan = require('morgan');
const Port = 3500;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const urlencondedParcer = express.urlencoded({extended: false})
const connection = mysql.createConnection({
    host : "localhost",
    database : "mastersbookdb",
    user : "siteFindigBase",
    password : "humansedrexstep",
    port : "3306"
  });

app.use(express.static('views'));
app.listen(Port, (error) =>{
    error ? console.log(error) : console.log(`listening port ${Port}`);
});
app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
    res.render('firstPage');
});
app.get('/saved', (req,res)=>{
    res.render('secondPage');
})
app.post('/saveCard', urlencondedParcer, (req,res) =>{
    if(!req.body) return res.sendStatus(400);


    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec")
        }else{
        console.log("ne pizdec")
        }
    }
    )


     let insert = `INSERT INTO user () VALUES (strength, dexterity, constitution,	intelligence, wisdom, charisma) VALUES ('${req.body.login}', '${req.body.password}'), '${req.body.login}', '${req.body.login}', '${req.body.login}', '${req.body.login}')`;
    connection.query(insert,(err, result)=>{
        console.log(err);
        console.log('/////////');
        console.log(result);
    });


    connection.end(function(err){
            if(err){
                return console.log("blya pizdec")
            }else{
                console.log("ne pizdec")
            }
                                })
})