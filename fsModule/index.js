var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req, res){

    if(req.url="/"){

        //Asy read file ---
        // fs.readFile('Home.html', function(error, data){
        //     res.writeHead(200, {'Content-Type': 'Text/html'});
        //     res.write(data);
        //     res.end();
        // });

        //Syn read file ---
        // let myData= fs.readFileSync('Home.html');
        // res.writeHead(200, { 'Content-Type': 'Text/html' });
        // res.write(myData);
        // res.end();


        // // Asy write file ------- =এখানেও ফেইল দেখাছে না 
        // fs.writeFile('demo4.txt', 'Hello World', function(error){

        //     if(error){
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file write fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file write successfull");
        //         res.end();
        //     }
        // })

        // // Sync write file ---- // =এখানেও ফেইল দেখাছে না 
        // let error=fs.writeFileSync('demoSync1.txt', 'Hello World');
        // if(error){
        //     res.writeHead(200, { 'Content-Type': 'Text/html' });
        //     res.write("file write fail");
        //     res.end();
        // }
        // else{
        //     res.writeHead(200, { 'Content-Type': 'Text/html' });
        //     res.write("file write successfull");
        //     res.end();
        // }


        // // Async file rename
        // fs.rename('demo3.txt', 'demo34.txt', function(error){

        //     if(error){
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file rename fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file rename successfull");
        //         res.end();
        //     }
        // })

        //Sync file rename 
        // let error = fs.renameSync('demo44.txt', 'demo45.txt');
        //     if (error) {
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file sync rename fail");
        //         res.end();
        //     }
        //     else {
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file rename sync successfull");
        //         res.end();
        //     }

        // Async file delate
        // fs.unlink('demo45.txt', function(error){

        //     if(error){
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file unlik fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file unlik successfull");
        //         res.end();
        //     }
        // })

        //Sync file delate
        // let error = fs.unlinkSync('demoSync1.txt');
        //     if (error) {
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file sync unlik fail");
        //         res.end("file sync unlik fail");
        //     }
        //     else {
        //         res.writeHead(200, { 'Content-Type': 'Text/html' });
        //         res.write("file unlik sync successfull");
        //         res.end("file sync unlik successfull");
        //     }

        // Sync exists file
        let result = fs.existsSync("demossSyncRename3.txt");
        if(result){
            res.end("file found");
        }
        else{
            res.end("file not found");
        }

    }

});
server.listen(5001);
console.log("server run succesfull");
