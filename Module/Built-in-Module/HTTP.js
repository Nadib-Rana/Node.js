const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // res.end("Hello Developer, your server is now connected!");
  res.end('<h1>Wellcom</h1>');
});

server.listen(port, () => {
  console.log(`Your server is successfully running. Access it at http://${hostname}:${port}`);
});
