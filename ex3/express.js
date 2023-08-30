const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const morgan = require('morgan');
const Port = 3500;
const mysql = require('mysql');
const urlencondedParcer = express.urlencoded({extended: false})
const connection = mysql.createConnection({
    host : "localhost",
    database : "mastersbookdb",
    user : "siteFindigBase",
    password : "humansedrexstep",
    port : "3306"
  });
  
  
const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`);

app.listen(Port, (error) =>{
    error ? console.log(error) : console.log(`listening port ${Port}`);
});
app.use(express.static('pages'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.get("/", (req,res) =>{
    res.sendFile(createPath('test'));
});
app.get("/fp", (req,res) =>{
    res.sendFile(createPath('html_verst'));
});

app.post('/fp',urlencondedParcer, (req, res)=>{
        connection.connect(function(err){
            if(err){
            return console.log("blya pizdec")
            }else{
            console.log("ne pizdec")
            }
        }
        )
        let savedClass = 1 /*localStorage.getItem("savedClass")*/;
        let image =1 /*localStorage.getItem("image")*/;
        let stats =[];
        // for (i=0; i<6; i++){
        // stats[i] = localStorage.getItem(`stats${i}`)
        // }
        let addElement = `INSERT INTO hero (class, image, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES (${savedClass}, ${image}, ${stats[0]}, ${stats[1]}, ${stats[2]}, ${stats[3]}, ${stats[4]}, ${stats[5]})`;
        connection.query(addElement,(err, result, field)=>{
            console.log(err)
            console.log(result)
        });
        connection.end(function(err){
            if(err){
                return console.log("blya pizdec")
            }else{
                console.log("ne pizdec")
            }
        }
        )
        res.ok
    })
app.get('/card/:id', (req,res) =>{
    const card ={
        id: '1',
        heroClass: 'barbarian',
        image: 'data/grd_cards/barbarian/1.jpg',
        specs:[
            1,
            1,
            1,
            1,
            20,
            20
        ]
    };
    res.render(createPath('card'), {card})
})

app.get("/index_secondPage.html", (req,res)=>{
    reset.sendFile(createPath('index_secondPage'));
})
app.get('/cards/:id', (req,res) =>{
    res.sendFile(createPath('card'))
})
app.get("/about-us", (req,res) =>{
    res.redirect('/fp')
});
app.use((req,res)=>{
    res
    .status(404)
    .sendFile(createPath('index_secondPage'));
});


// прямое получение картинки без использования статики для папки
// app.get("/pages/data/DnD-Symbol.png", (req,res) =>{
//     fs.readFile(__dirname + req.url, function(err, file) {
//             res.setHeader('Content-Type', 'image/png');
//             res.end(file);
//           });
// });

//////////////

// app.get("/sliderAndPictures.js", (req,res) =>{
//     fs.readFile(__dirname + req.url, function(err, file) {
//         res.setHeader('Content-Type', 'text/js');
//         res.end(file);
//       });
// });



    // const card ={
    //     id: '1',
    //     heroClass: 'barbarian',
    //     image: 'data/grd_cards/barbarian/1.jpg',
    //     specs:[
    //         1,
    //         1,
    //         1,
    //         1,
    //         20,
    //         20
    //     ]
    // };