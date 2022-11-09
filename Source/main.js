var http=require('http');
var URL=require('url');

var server=http.createServer(function(req, res){
    
    // http request
    // if(req.url=="/"){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<h1>This is home page</h1>')
    //     res.end();
    // }

    // else if(req.url=="/about"){
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     res.write('<h1>This is about page</h1>')
    //     res.end();
    // }

    // else if(req.url=="/contact"){
    //     res.writeHead(200, { 'Content-Type': 'text/html' })
    //     res.write('<h1>This is Contact</h1>')
    //     res.end();
    // }

    // res.end("hello world")


    //URL Module
    var myUrl = "https://rabbil.com/courseDetails?id=632d7ebfbe4399c3d8ca0590";

    var myUrlObj = URL.parse(myUrl, true);

    var myHostName=myUrlObj.host;
    var myPathName=myUrlObj.pathname;
    var mySearchName=myUrlObj.search;

    res.writeHead(200,{'Content-type':'text/html'})
    // res.write(myHostName);
    // res.write(myPathName);
    res.write(mySearchName);
    res.end();

});

server.listen(5000);
console.log("Server run success");