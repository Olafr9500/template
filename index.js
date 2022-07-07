/* eslint-env node */
const fs = require('fs');
const http = require('http');
const path = require('path');

const port = 8000;
const directory = './public';

const types = {
    txt: 'text/plain',
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    json: 'application/json',
    jpg: 'image/jpeg',
    png: 'image/png',
    ico: 'image/x-icon',
    woff2: 'font/woff2',
    woff: 'font/woff',
    map: 'application/json'
};

const root = path.normalize(path.resolve(directory));

const server = http.createServer((req, res) => {
    const extension = path.extname(req.url).slice(1).split('?')[0];
    const type = extension ? types[extension] : types.html;
    if (Boolean(type) === false) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Fail initializing extension');
        return;
    }
    
    let fileName = req.url.split('?')[0];
    if (fileName === '/') fileName = '/pages/index.html';
    else if (!extension) {
        fileName = fileName.replace(/\/$/, '');
        try {
            fs.accessSync(path.join(root, '/pages', fileName + '.html'), fs.constants.R_OK);
            fileName = '/pages/' + fileName + '.html';
        } catch (err) {
            fileName = fileName + '.html';
        }
    }

    const filePath = path.join(root, fileName);
    const isPathUnderRoot = path.normalize(path.resolve(filePath)).startsWith(root);

    if (isPathUnderRoot === false) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: File outside of root');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404: File not found ' + filePath);
            return;
        }
        res.writeHead(200, { 'Content-Type': type });
        res.end(data);
    });
    
    console.log(`${req.method} ${req.url} - ${res.statusCode}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});