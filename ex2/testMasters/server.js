const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
// const morgan = require('morgan');
const Port = 3500;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const urlencondedParcer = express.urlencoded({extended: false});
var jsonParser = bodyParser.json()

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

// app.post('/saveCard', jsonParser, (req,res)=>{
//     console.log(req.body)
// })
app.post('/saveCard', jsonParser, (req,res) =>{
    // console.log(req.body[0].valued[0]);
    if(!req.body) return res.sendStatus(400);


    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec")
        }else{
        console.log("ne pizdec")
        }
    }
    )


    let insertOne = `INSERT INTO hero (class, image, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES ('${req.body[2].class}', '${req.body[1].img}', ${req.body[0].valued[0]}, ${req.body[0].valued[1]}, ${req.body[0].valued[2]}, ${req.body[0].valued[3]}, ${req.body[0].valued[4]}, ${req.body[0].valued[5]})`;
    // let insertTwo = `INSERT INTO hero (class, image, strength, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES( 'sam', 'som', ${req.body[0].valued[0]}, ${req.body[0].valued[1]}, ${req.body[0].valued[2]}, ${req.body[0].valued[3]}, ${req.body[0].valued[4]}, ${req.body[0].valued[5]})`
    connection.query(insertOne,(err, result)=>{
        console.log(err);
        console.log('/////////');
        console.log(result);
    });
    console.log('result aproved')

    // connection.end(function(err){
    //         if(err){
    //             return console.log("blya pizdec")
    //         }else{
    //             console.log("ne pizdec")
    //         }
    //                             })
})
app.post(`/putCard`, jsonParser, (req,res)=>{
    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec")
        }else{
        console.log("ne pizdec")
        }
    }
    )
    // let objSended = {};
    let id 
    let select = `SELECT id, class, image, strength, dexterity, constitution, intelligence, wisdom, charisma FROM hero `;

    connection.query(select,(err, result)=>{
        console.log(err);
        console.log('/////////');
        console.log('result = ', result[0].id)
        console.log(req.body.numb)
        let selectMore =`SELECT id, class, image, strength, dexterity, constitution, intelligence, wisdom, charisma FROM hero WHERE id = ${result[0].id - (- req.body.numb)}`;
        connection.query(selectMore, (err,result)=>{
            console.log(err);
            console.log('/a/a/a/a/a/a/a/a/a');
            console.log(result[0])
            res.send(result[0])
        })
    })
})
app.post('/deleteCard', (res,req)=>{
    // connection.connect(function(err){
    //     if(err){
    //     return console.log("blya pizdec")
    //     }else{
    //     console.log("ne pizdec")
    //     }
    // })

    res.send('log');
})