import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/view-image' && req.method === 'GET') {
        // Construct the absolute path to veryhappydog.jpg assuming it's in the project root directory
        const imagePath = path.join(__dirname, '../dist/images', 'veryhappydog.jpg');
        
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error reading the image file.');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});