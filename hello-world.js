//write a program that prints a hello world to the console 
console.log('Hello,World!!')

//create a server  
const http = require('http');

const server = http.createServer(function (req, res) {
  res.write('<h1>Hello Node!!!!</h1>');
  res.end();
});

server.listen(3000, (err) => {
  err ? console.log(err) : console.log('The Server is Running on port 3000');
});