/* eslint-env node */
const http = require('http');
const fs = require('fs');

console.clear();

http.createServer(function (req, res) {
    const url = req.url.split('?')[0];
    switch (url) {
    case '/':
        fs.readFile('public/pages/index.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(err));
                console.log(`${req.method} ${req.url} - 404 ${err}`);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            console.log(`${req.method} ${req.url} - 200`);
        });
        break;
    case '/about':
    case '/about/':
        fs.readFile('public/pages/about.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(err));
                console.log(`${req.method} ${req.url} - 404 ${err}`);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            console.log(`${req.method} ${req.url} - 200`);
        });
        break;
    case '/package.json':
        fs.readFile('package.json', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(err));
                console.log(`${req.method} ${req.url} - 404 ${err}`);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
            console.log(`${req.method} ${req.url} - 200`);
        });
        break;
    default:
        if (url.startsWith('/css')) {
            fs.readFile('public' + url, function (err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(err));
                    console.log(`${req.method} ${req.url} - 404 ${err}`);
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
                console.log(`${req.method} ${req.url} - 200`);
            });
        } else if (url.startsWith('/js')) {
            fs.readFile('public' + url, function (err, data) {
                if (err) {
                    res.writeHead(404 , { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(err));
                    console.log(`${req.method} ${req.url} - 404 ${err}`);
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(data);
                console.log(`${req.method} ${req.url} - 200`);
            });
        } else if (url.startsWith('/images')) {
            fs.readFile('public' + url, function (err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(err));
                    console.log(`${req.method} ${req.url} - 404 ${err}`);
                    return;
                }
                // get type of data
                const type = url.split('.')[1];
                res.writeHead(200, { 'Content-Type': `image/${type}` });
                res.end(data);
                console.log(`${req.method} ${req.url} - 200`);
            });
        } else {
            fs.readFile('public/pages/404.html', function (err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(err));
                    console.log(`${req.method} ${req.url} - 404 ${err}`);
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
                console.log(`${req.method} ${req.url} - 200`);
            });
        }
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});