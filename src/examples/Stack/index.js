import { createServer } from 'http';
import example from './Example';

const hostname = '127.0.0.1';
const port = 3000;


const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(JSON.stringify(example()));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});