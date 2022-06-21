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
                return404(req.method, req.url, err, res);
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
                return404(req.method, req.url, err, res);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            console.log(`${req.method} ${req.url} - 200`);
        });
        break;
    case '/package.json':
    case '/manifest.json':
        fs.readFile('.' + url, function (err, data) {
            if (err) {
                return404(req.method, req.url, err, res);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
            console.log(`${req.method} ${req.url} - 200`);
        });
        break;
    case '/sw.js':
    case '/workbox-dd1eae70.js':
        fs.readFile('public/' + url, function (err, data) {
            if (err) {
                return404(req.method, req.url, err, res);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
            console.log(`${req.method} ${req.url} - 200`);
        });
        break;
    case '/sw.js.map':
    case '/workbox-dd1eae70.js.map':
        fs.readFile('public/' + url, function (err, data) {
            if (err) {
                return404(req.method, req.url, err, res);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
            console.log(`${req.method} ${req.url} - 200`);
        });
        break;
    case '/robots.txt':
        fs.readFile('public/' + url, function (err, data) {
            if (err) {
                return404(req.method, req.url, err, res);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
            console.log(`${req.method} ${req.url} - 200`);
        });
        break;
    default:
        if (url.startsWith('/css')) {
            fs.readFile('public' + url, function (err, data) {
                if (err) {
                    return404(req.method, req.url, err, res);
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
                console.log(`${req.method} ${req.url} - 200`);
            });
        } else if (url.startsWith('/js')) {
            fs.readFile('public' + url, function (err, data) {
                if (err) {
                    return404(req.method, req.url, err, res);
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(data);
                console.log(`${req.method} ${req.url} - 200`);
            });
        } else if (url.startsWith('/images')) {
            fs.readFile('public' + url, function (err, data) {
                if (err) {
                    return404(req.method, req.url, err, res);
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
                    return404(req.method, req.url, err, res);
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

function return404(method, url, error, response){
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(error));
    console.log(`${method} ${url} - 404 ${error}`);
}