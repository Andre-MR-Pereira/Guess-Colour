//to fix

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var fs=require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var myReadStream= fs.createReadStream(__dirname + '/index.html','utf8');
  myReadStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
