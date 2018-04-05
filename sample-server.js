var http = require('http');

var server = http.createServer();
server.on('request',(request,response)=>{
  //
  response.writeHead(200);

  //
  response.write('URL: ' + request.url + '\n');

  //
  Object.keys(request.headers).forEach(function (key) {
     response.write(key + ': ' + request.headers[key] + '\n');
  });

  //
  response.end();
});
server.listen(8080,'127.0.0.1');
