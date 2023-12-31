const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const Port = 3500;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const urlencondedParcer = express.urlencoded({extended: false});
var jsonParser = bodyParser.json();

const connection = mysql.createConnection({
    host : "localhost",
    database : "mastersbookdb",
    user : "siteFindigBase",
    password : "humansedrexstep",
    port : "3306"
  });
app.use(express.urlencoded({extended: false}));
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
app.get('/registration', (req,res)=>{
    res.render('registration');
})
app.get('/loginPage', (req,res)=>{
    res.render('loginPage');
})
app.get('/registrationPage', (req,res)=>{
    res.render('registrationPage');
})


app.post('/saveCard', jsonParser, (req,res) =>{
    if(!req.body) return res.sendStatus(400);


    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec");
        }else{
        console.log("ne pizdec");
        }
    }
    )
    let insertOne = `INSERT INTO hero (class, image, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES ('${req.body[2].class}', '${req.body[1].img}', ${req.body[0].valued[0]}, ${req.body[0].valued[1]}, ${req.body[0].valued[2]}, ${req.body[0].valued[3]}, ${req.body[0].valued[4]}, ${req.body[0].valued[5]})`;
    
    connection.query(insertOne,(err, result)=>{
    // let insertTwo = `INSERT INTO hero (class, image, strength, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES( 'sam', 'som', ${req.body[0].valued[0]}, ${req.body[0].valued[1]}, ${req.body[0].valued[2]}, ${req.body[0].valued[3]}, ${req.body[0].valued[4]}, ${req.body[0].valued[5]})`
    
    let upcomingCardId = result.insertId;
    let cardsId = [];
    let currentUser = req.body[3].user;
    let getUserCards = `SELECT cardsCount FROM user WHERE login = '${req.body[3].user}'`;///это все хуета, надо засунуть в второй конекшен
    connection.query(getUserCards, (err, result) =>{
            if(result[0].cardsCount != null){
                cardsId = JSON.parse(result[0].cardsCount);
            }
            cardsId.push(upcomingCardId); 
            console.log(cardsId);
            let incertCard = `UPDATE user SET cardsCount = '${JSON.stringify(cardsId)}'  WHERE login = '${currentUser}'`;
            connection.query( incertCard, (err, result) =>{
                console.log(err);
            })
    })
        console.log(err);
        res.send(console.log('saving finished'));
    });
    
})




app.post(`/putCard`, jsonParser, (req,res)=>{
    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec");
        }else{
        console.log("ne pizdec");
        }
    }
    )
    let select = `SELECT id, class, image, strength, dexterity, constitution, intelligence, wisdom, charisma FROM hero `;

    connection.query(select,(err, result)=>{
        console.log(err);
        // console.log('/////////');
        // console.log('result = ', result[0].id);
        // console.log(req.body.login, 'login is');
        let getCardsId = `SELECT cardsCount FROM user WHERE login = '${req.body.login}'`
        connection.query(getCardsId, (err, result)=>{
            let cardsArr = JSON.parse(result[0].cardsCount);
            console.log(cardsArr)
            let allCards = [];
            if (cardsArr == null){
                res.end;
            }else{
            for(let i=0; i < cardsArr.length; i++){
                // console.log(cardsArr[i]);
                let selectCurrent = `SELECT id, class, image, strength, dexterity, constitution, intelligence, wisdom, charisma FROM hero WHERE id = ${cardsArr[i]}`;
                connection.query(selectCurrent, (err, result)=>{
                    // let parced = JSON.stringify(result[0]);
                    allCards.push(result[0]);
                    // console.log(allCards);
                    if (i == (cardsArr.length - 1)){  
                        res.send(JSON.stringify(allCards)) && console.log('putcard completed')
                    }else{
                        console.log('something wroooong')
                        res.end;
                    }
                })
            }}
            
            
        })
    })
})
app.post('/deleteCard', jsonParser, (req,res)=>{
    connection.connect(function(err){
        if(err){
        return console.log("1 blya pizdec");
        }else{
        console.log("ne pizdec");
        }
    }
    )
    let deletingId = `DELETE FROM hero WHERE id = ${req.body.id}`;
    console.log('2 reqest got', req.body);
    connection.query(deletingId, (err, result)=>{ 
        console.log(err);
        console.log('\\\\\\');
        let getCardsId = `SELECT cardsCount FROM user WHERE login = '${req.body.login}'`
        connection.query(getCardsId, (err, result)=>{
            let cardsArr = JSON.parse(result[0].cardsCount);
            console.log('4 cardsCount selected' , result[0].cardsCount)
            if (cardsArr == null){
                console.log('5 error becouse of null')
                res.end
            }else{
            for (let i =0 ; i < cardsArr.length; i++){
                console.log(cardsArr[i], '5 lalka')
                console.log(req.body.id) 
                if (cardsArr[i] == req.body.id){
                    cardsArr.splice(i,1);
                    let updateMem = `UPDATE user SET cardsCount= '${JSON.stringify(cardsArr)}' WHERE login = '${req.body.login}'`;
                    console.log('6 updated list before adding to db= ', cardsArr)
                    connection.query(updateMem, (err, result)=>{
                        console.log(result, '7 updated');
                        console.log('8 just before resend')
                        res.send(console.log('completed delete /////'));
                    })
                }
            }
            }
        })
    })

    
    
})
app.post ('/login/loginSucces', (req,res) => {
    let selectMore =`SELECT password FROM user WHERE login = '${req.body.login}'`;
    console.log(req.body, 'login request')
    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec");
        }else{
        console.log("ne pizdec");
        }
    }
    )
    connection.query(selectMore, (err, result)=>{
        console.log(err);
        if (result[0].password == req.body.password){
            // console.log('succes', result[0].password);
            
            res.redirect('/firstPage');
        }
        else{
            console.log('error', result);
            res.end;
        }
    })
    
})
app.post('/login/saveLogin',jsonParser, (req,res)=>{
    let selectMore =`SELECT password FROM user WHERE login = '${req.body.login}'`;
    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec");
        }else{
        console.log("ne pizdec");
        }
    })
    connection.query(selectMore, (err, result)=>{
        console.log(err);
        console.log(req.body);
        console.log('its login res', req.body);
        console.log(req.body.password);
        if (result[0].password == req.body.password){
            console.log('sending login', req.body.login);
            let obj = new Object();
            obj.login = req.body.login;
            res.send(JSON.stringify(obj));
        }
        else{
            console.log('error', result);
            res.end;
        }
    })
})
app.post ('/registrationPage/registrationSucces', (req,res) => {
    let registrateNew = `INSERT INTO user (login, password) VALUES ( '${req.body.login}', '${req.body.password}' )`;
    connection.connect(function(err){
        if(err){
        return console.log("blya pizdec");
        }else{
        console.log("ne pizdec");
        }
    }
    )
    connection.query(registrateNew, (err, result)=>{
        console.log(err);
        console.log('added user name =', req.body.login);
    })
    res.redirect('/firstPage');
})