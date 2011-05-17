var cluster = require('cluster')
   , app = require('./app');

 cluster(app)
   .listen(3000);