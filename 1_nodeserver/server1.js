var http=require('http');

var server=http.createServer(function(req,res){
    if(req.url=='/')
    {
        res.write('<html><body><h1>Hello everyone</h1></body></html>');
        res.end();
    }
    else if(req.url=='/user')
    {
        res.write('<html><body><h1>This is user page...</h1></body></html>');
        res.end();
    }
    else if(req.url=='/admin')
    {
        res.write('<html><body><h1>This is admin page...</h1></body></html>');
        res.end();
    }
})

server.listen(5000);
console.log('Node server is at 5000')