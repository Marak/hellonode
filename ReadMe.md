# hellonode! 
the simplest possible http server hello world example in node

## features

 - Example package.json
 - Starts up simple httpServer with helloworld

## installation

     git clone git://github.com/Marak/hellonode.git
     cd hellonode
     node server.js

Now you should have a listening node.js http server running on port 80

## the code

    // requires node's http module
    var http = require('http');

    // creates a new httpServer instance
    http.createServer(function (req, res) {
      
      // ^^ this is the callback, or request handler for the httpServer
      
      // respond to the browser, write some headers so the 
      // browser knows what type of content we are sending
      res.writeHead(200, {'Content-Type': 'text/plain'});
      
      // write some content to the browser that your user will see
      res.write('hello, i know nodejitsu.')
      
      // close the response
      res.end();
      
    }).listen(80); // the server will listen on port 80
