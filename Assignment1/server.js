var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url).pathname;
  response.writeHead(200, {'Content-Type': 'application/json'});

  if (parsedUrl == '/listings' && request.method == 'GET') {
    response.write(listingData);
    response.end();
  }
  else {
    response.writeHead(404);
    response.end('Bad gateway error');
  }
};

var server = http.createServer(requestHandler);

server.listen(port, function(){
  console.log('Server is listening on: http://localhost:'+port);
});

console.log('Is the server started?');

fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err) throw err;
  listingData = data;
});
