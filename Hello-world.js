var http = require('http');
http.createServer(function(request,response){
// Send the HTTP header
// HTTP Status: 200 : OK
// Content Type: text/plain
response.writeHead(200, {'Content-Type': 'text/plain'});
// Mengirim response ke body sebagai "Hello World"
response.end('Hello World\n'); }).listen(8000);
// Console akan mencetak pesan
console.log('Server running at http://127.0.0.1:8000/');
