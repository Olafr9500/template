/* eslint-env node */
const http = require('http');
const fs = require('fs');

console.clear();

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('index.html', function (err, data) {
            console.log(`${req.method} ${req.url} - 200`);
            res.end(data);
        });
    } else {
        fs.readFile(__dirname + req.url, function (err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                console.log(`${req.method} ${req.url} - 404 ${err.message}`);
                return;
            }
            res.writeHead(200);
            console.log(`${req.method} ${req.url} - 200`);
            res.end(data);
        });
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});