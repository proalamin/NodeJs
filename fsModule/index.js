var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req, res){

    if(req.url="/"){

        //Asy read file
        // fs.readFile('Home.html', function(error, data){
        //     res.writeHead(200, {'Content-Type': 'Text/html'});
        //     res.write(data);
        //     res.end();
        // });

        // //Syn read file
        // let myData= fs.readFileSync('Home.html');
        // res.writeHead(200, { 'Content-Type': 'Text/html' });
        // res.write(myData);
        // res.end();


        //Asy write file
        fs.writeFile('demo.txt', 'Hello World', function(error){

            if(error){
                res.writeHead(200, { 'Content-Type': 'Text/html' });
                res.write("file write fail");
                res.end();
            }
            else{
                res.writeHead(200, { 'Content-Type': 'Text/html' });
                res.write("file write successfull");
                res.end();
            }
        })

        //Sync write file
        let error=fs.writeFileSync('demoSync.txt', 'Hello World');
            if(error){
                res.writeHead(200, { 'Content-Type': 'Text/html' });
                res.write("file write fail");
                res.end();
            }
            else{
                res.writeHead(200, { 'Content-Type': 'Text/html' });
                res.write("file write successfull");
                res.end();
            }
    }

});
server.listen(5001);
console.log("server run succesfull");
