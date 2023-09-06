const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
// const morgan = require('morgan');
const Port = 3500;
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
app.use(express.urlencoded({extended: false}));

// app.use(express.json());

app.use(express.static('views'));
app.use(express.static('data'));
app.listen(Port, (error) =>{
    error ? console.log(error) : console.log(`listening port ${Port}`);
});
app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
    res.render('firstPage');
});
app.get('/firstPage', (req,res)=>{
    res.render('firstPage');
});
app.get('/saved', (req,res)=>{
    res.render('secondPage');
})

app.post('/saveCard', urlencondedParcer, (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})
// app.post('/saveCard', urlencondedParcer, (req,res) =>{
//     console.log('azaza');
//     if(!req.body) return res.sendStatus(400);


//     connection.connect(function(err){
//         if(err){
//         return console.log("blya pizdec")
//         }else{
//         console.log("ne pizdec")
//         }
//     }
//     )


//      let insert = `INSERT INTO user () VALUES (strength, dexterity, constitution,	intelligence, wisdom, charisma) VALUES ('${req.body.inner[0]}', '${req.body.inner[1]}'), '${req.body.inner[2]}', '${req.body.inner[3]}', '${req.body.inner[4]}', '${req.body.inner[5]}')`;
//     connection.query(insert,(err, result)=>{
//         console.log(err);
//         console.log('/////////');
//         console.log(result);
//     });


//     connection.end(function(err){
//             if(err){
//                 return console.log("blya pizdec")
//             }else{
//                 console.log("ne pizdec")
//             }
//                                 })
// })
