//npm install express --save
// npm install nodemon for auto run
//nodemon "file" to run nodemon
const port = 3500;
const express = require('express'); // adding express module
const app = express() //adding function
app.get('/', (req,res) =>{ //creating server request response
    res.send("Hello world")
})
app.listen(port, () => { // servers port
    console.log("Server express is listening",port);
})