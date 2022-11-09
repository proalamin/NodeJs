var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req, res){

    if(req.url="/"){

        //Asy
        // fs.readFile('Home.html', function(error, data){
        //     res.writeHead(200, {'Content-Type': 'Text/html'});
        //     res.write(data);
        //     res.end();
        // });

        //Syn
        let myData= fs.readFileSync('Home.html');
        res.writeHead(200, { 'Content-Type': 'Text/html' });
        res.write(myData);
        res.end();
    }


});
server.listen(5001);
console.log("server run succesfull");
