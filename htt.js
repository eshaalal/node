const http=require("http");
http.createServer(function(request,response){
    response.end("hello");

}).listen(3000);