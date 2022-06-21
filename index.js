/* eslint-env node */
const http = require('http');
const fs = require('fs');

console.clear();

http.createServer(function (req, res) {
    const url = req.url.split('?')[0];
    switch (url) {
    case '/':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('public/pages/index.html', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(404);
                res.end(JSON.stringify(err));
                console.log(`${req.method} ${req.url} - 404 ${err}`);
                return;
            }
            console.log(`${req.method} ${req.url} - 200`);
            res.end(data);
        });
        break;
    case '/about':
    case '/about/':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('public/pages/about.html', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(404);
                res.end(JSON.stringify(err));
                console.log(`${req.method} ${req.url} - 404 ${err}`);
                return;
            }
            console.log(`${req.method} ${req.url} - 200`);
            res.end(data);
        });
        break;
    case '/package.json':
        res.writeHead(200, { 'Content-Type': 'application/json' });
        fs.readFile('package.json', function (err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                console.log(`${req.method} ${req.url} - 404 ${err}`);
                return;
            }
            console.log(`${req.method} ${req.url} - 200`);
            res.end(data);
        });
        break;
    default:
        if (url.startsWith('/css')) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            fs.readFile('public' + url, function (err, data) {
                if (err) {
                    res.setHeader('Content-Type', 'application/json');
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    console.log(`${req.method} ${req.url} - 404 ${err}`);
                    return;
                }
                console.log(`${req.method} ${req.url} - 200`);
                res.end(data);
            });
        } else if (url.startsWith('/js')) {
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            fs.readFile('public' + url, function (err, data) {
                if (err) {
                    res.setHeader('Content-Type', 'application/json');
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    console.log(`${req.method} ${req.url} - 404 ${err}`);
                    return;
                }
                console.log(`${req.method} ${req.url} - 200`);
                res.end(data);
            });
        } else if (url.startsWith('/img')) {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            fs.readFile('public' + url, function (err, data) {
                if (err) {
                    res.setHeader('Content-Type', 'application/json');
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    console.log(`${req.method} ${req.url} - 404 ${err}`);
                    return;
                }
                console.log(`${req.method} ${req.url} - 200`);
                res.end(data);
            });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('public/pages/404.html', function (err, data) {
                if (err) {
                    res.setHeader('Content-Type', 'application/json');
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    console.log(`${req.method} ${req.url} - 404 ${err}`);
                    return;
                }
                console.log(`${req.method} ${req.url} - 200`);
                res.end(data);
            });
        }
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});