'use strict';

const errorSend = require('../error-send/error-send.js')

let router = module.exports = exports = {};

router.routes = {};

let methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'];

methods.forEach((method) => {
  router.routes[method] = {};
  router[method.toLowerCase()] = function(pathname, callback) {
    router.routes[method][pathname] = callback;
  };
});
