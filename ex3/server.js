const http =require('http');
const port = 3500;
const server = http.createServer((req, res) =>{
    console.log('Server request');
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'application/json');
    // res.write('<head><link rel="stylesheet" href ="#"></head>');
    // res.write('<h1>Hello</h1>')
    // res.write('<h2>world</h2>')
    const data = JSON.stringify([
        {name: "Tom", age: 10},
        {name: 'Alex', age: 20},
    ])
    res.end(data);
});
server.listen(port, 'localhost', (error) =>{
    error ? console.log(error) : console.log(`listening port ${port}`);
})