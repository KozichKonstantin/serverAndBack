const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const app = express();
const morgan = require('morgan');
const Port = 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { stringify } = require('querystring');
const urlencondedParcer = express.urlencoded({extended: false});
const connection = mysql.createConnection({
    host : "localhost",
    database : "newbase",
    user : "siteFindigBase",
    password : "humansedrexstep",
    port : "3306"
  });
  app.listen(Port, (error) =>{
    error ? console.log(error) : console.log(`listening port ${Port}`);
});

app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
    res.render('firstPage');
});
app.get('/loginPage', (req,res)=>{
    res.render('loginPage');
})
app.get('/registrationPage', (req,res)=>{
    res.render('registrationPage');
})
app.post('/finish', (req,res) =>{
    res.render('finish');
})
app.post('/registrationPage/registrationSucces', urlencondedParcer, (req,res) =>{
    if(!req.body) return res.sendStatus(400);


    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec")
        }else{
        console.log("ne pizdec")
        }
    }
    )

    // ${req.body.class}, ${req.body.image}, ${req.body.name}
    let insert = `INSERT INTO user (login, password) VALUES ('${req.body.login}', '${req.body.password}')`;
    connection.query(insert,(err, result)=>{
        console.log(err);
        console.log('/////////');
        console.log(result);
    });

    res.render('finish')
    // connection.end(function(err){
    //     if(err){
    //         return console.log("blya pizdec")
    //     }else{
    //         console.log("ne pizdec")
    //     }
    // }
    // )
    
})
app.post('/login/loginSucces', urlencondedParcer, (req,res)=>{
    if(!req.body) return res.sendStatus(400);

    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec")
        }else{
        console.log("ne pizdec")
        }
    }
    )


    let select = `SELECT password FROM user WHERE login = '${req.body.login}'`
    connection.query(select,(err, result)=>{
        console.log(err);
        console.log('/////////');
        console.log(typeof(result[0].password))
        if(result[0].password == `${req.body.password}`){
            res.render('finish')
        }else{
            res.render('firstPage')
        }
    });

    
    connection.end(function(err){
        if(err){
            return console.log("blya pizdec")
        }else{
            console.log("ne pizdec")
        }
    }
    )
})