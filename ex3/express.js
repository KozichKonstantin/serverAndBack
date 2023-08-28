const express = require('express');
const path = require('path');
const app = express();
const Port = 3500;

const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`);

app.listen(Port, (error) =>{
    error ? console.log(error) : console.log(`listening port ${Port}`);
});
app.get("/", (req,res) =>{
    res.sendFile(createPath('test'));
});
app.get("/fp", (req,res) =>{
    res.sendFile(createPath('html_verst'));
});
app.get("/about-us", (req,res) =>{
    res.redirect('/fp')
});
app.use((req,res)=>{
    res
    .status(404)
    .sendFile(createPath('index_secondPage'));
});
