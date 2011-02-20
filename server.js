var sys = require("sys"),  
    http = require("http"),
    url = require("url");  
  
http.createServer(function(request, response) {  
  var redirect = "http://www." + request.headers['host'] + request.url;
  sys.puts(redirect);
  response.writeHead(301, { 'Location' : redirect });
  response.write('redirecting to:' + redirect);  
  response.end();
}).listen(80);  
  
sys.puts("DubDubDubIt Server running at http://localhost:80/");
