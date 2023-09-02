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
app.get('/sp', (req,res)=>{
    res.render('about')
})
app.post('/about', (req,res)=>{
    res.render('about')
    // console.log(req.query)
    // const buffers=[];
    // for (const chunk of Object.keys(JSON.parse(req.bodyParser))){
    //     buffers.push(chunk, req[key]);
    // }
    // let userName = Buffer.concat(buffers).toString();
    // res.end(userName)
})
app.get('/about', (req,res) =>{
    const type = [
        {
            'id':1,
            'class': 'barbarian',
            'strength': 3
        },
        {
            'id':2,
            'class': 'bard',
            'strength': 2
        },
        {
            'id':3,
            'class': 'spy',
            'strength': 1
        }
    ]
    res.write(type);
    res.render('about');
    
    
})
app.get('/about', urlencondedParcer, (req,res) =>{
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