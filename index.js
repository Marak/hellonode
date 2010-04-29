var sys = require('sys'),    
	http = require('http');

http.createServer(function (req, res) {
  res.sendHeader(200, {'Content-Type': 'text/plain'});
  res.write('hello world')
	res.end();
}).listen(8001);

/* server started */	
sys.puts('sample app running at http://127.0.0.1:8001/');
