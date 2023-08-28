const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) =>{
    console.log('Server request');
    res.setHeader('Content-Type', 'text/html');
    const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`);
let basePath = '';
    switch(req.url){
    case '/':
        case '/home':
            case '/index':
        basePath =createPath('test');
        res.statusCode = 200;
        break;
    case '/fp':
        basePath = createPath('html_verst');
        res.statusCode = 200;
        break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/sp');
            res.end();
            break;
    case '/sp':
        basePath = createPath('index_secondPage');
        res.statusCode = 200;
        break;
    default:
        basePath = createPath('test')
        res.statusCode = 404;
        break;

    }


        fs.readFile(basePath, (err,data) =>{
            if(err){
                console.log(err);
                res.statusCode = 500;
                res.end();
            } else{
                res.write(data);
                res.end();
            }
        })

})
server.listen(port, 'localhost', (error) =>{
    error ? console.log(error) : console.log(`listening port ${port}`);;
});