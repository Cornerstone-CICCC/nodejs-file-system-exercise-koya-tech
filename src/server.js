"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var fs_1 = require("fs");
var path_1 = require("path");
var port = 3000;
var server = http_1.default.createServer(function (req, res) {
    if (req.url === '/view-image' && req.method === 'GET') {
        // Construct the absolute path to veryhappydog.jpg assuming it's in the project root directory
        var imagePath = path_1.default.join(__dirname, '../dist/images', 'veryhappydog.jpg');
        fs_1.default.readFile(imagePath, function (err, data) {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error reading the image file.');
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        });
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});
server.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
