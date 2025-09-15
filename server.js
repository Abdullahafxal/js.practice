// server.js

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world, from EC2 Instance — powered by Node.js!');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

