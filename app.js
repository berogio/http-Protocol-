const http = require('http');
const cors = require('cors');
const jsonData = { message: 'Hello, world!' };
const proxy = http.createServer((req, res) => {
    // CORS-Middleware vor dem Senden der Antwort anwenden
    cors()(req, res, () => {
        // JSON-Daten senden

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(jsonData))
        res.end();
    });
});

proxy.listen(1337, () => {
    console.log('Server is running on port 1337');
});