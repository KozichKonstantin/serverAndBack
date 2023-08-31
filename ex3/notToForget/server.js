const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const morgan = require('morgan');
const Port = 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const urlencondedParcer = express.urlencoded({extended: false});
const connection = mysql.createConnection({
    host : "localhost",
    database : "mastersbookdb",
    user : "siteFindigBase",
    password : "humansedrexstep",
    port : "3306"
  });
  app.listen(Port, (error) =>{
    error ? console.log(error) : console.log(`listening port ${Port}`);
});
app.set('view engine', 'ejs')
app.get('/fp', (req,res)=>{
    res.render('start')
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.post('/about', urlencondedParcer, (req,res) =>{
    if(!req.body) return res.sendStatus(400);
    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec")
        }else{
        console.log("ne pizdec")
        }
    }
    )
    console.log(typeof(req.body.name));
    // ${req.body.class}, ${req.body.image}, ${req.body.name}
    let insert = `INSERT INTO justfortest (class, image, name) VALUES ('${req.body.class}', '${req.body.image}', '${req.body.name}')`;
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
    }
    )
    res.render('about')
})