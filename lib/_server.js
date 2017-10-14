'use strict';

const http = require('http');
const router = require('./router');
const url = require('url');

router.get('/', (req, res) => {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();

});

router.post('/', function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello from Post');
  res.end();

});

const server = http.createServer( function (req, res) {

  req.url = url.parse(req.url);
  router.routes[req.method][req.url.pathname](req,res);

}).listen(3000);
