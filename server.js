var http = require('http');
var port = process.env.PORT || 8001;

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('¡Hola Mundo!\n');
}).listen(port);
 
console.log('Servidor ejecutándose en http://127.0.0.1:8081/');