'use strict';

let router = module.exports = {};
router.routes = {};

let methods = ['GET', 'POST'];

methods.forEach((method) => {

  router.routes[method] = {};
  router[method.toLowerCase()] = function(path, cb) {
    router.routes[method][path] = cb;
  };

});
