var http = require('http');
var server=http.createServer(function(request,response){
    response.write('<html><body><h1>Hello welcome to nodejs</h1></body></html>');
})

server.listen(3030);
console.log('My server started on port 3030')