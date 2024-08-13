import { createServer } from 'http';
import test from './Test';
const hostname = '127.0.0.1';
const port = 3000;



const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'json');
    res.end(test());
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    // console(test());
});