"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const port = 3000;
const server = http_1.default.createServer((req, res) => {
    if (req.url === '/view-image' && req.method === 'GET') {
        // Construct the absolute path to veryhappydog.jpg assuming it's in the project root directory
        const imagePath = path_1.default.join(__dirname, '../dist/images', 'veryhappydog.jpg');
        fs_1.default.readFile(imagePath, (err, data) => {
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
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
