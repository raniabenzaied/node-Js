const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');

const contents = fs.readFileSync('welcome.txt', 'utf8');
console.log(contents);
