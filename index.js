/* eslint-env node */
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile(__dirname + req.url, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});