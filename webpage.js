const http = require('http');
const port = 5000;
const host = 'localhost';
const fs = require('fs');
const path = require('path');


const requestListener = function (req, res){
  res.writeHead(200,{'Content-Type':'text/html' });

    fs.readFile(path.join(__dirname, 'index.html'), function(error, data) {
      if (error){
        res.writeHead(404);
        res.write('Error: html file not found')
      }else{
        res.write(data)
      }
      res.end();
  
    })

};

const server = http.createServer(requestListener);
server.listen(port, host,() =>{
  console.log('Server is running on port: ' + port);
});

