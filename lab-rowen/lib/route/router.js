'use strict';

//the router for our server. I used the metacoding from Tyler's lecture and added
// parse since it doesn't fit the convention for the others.
const parser = require('../parse/parse-request.js');
const errorSend = require('../error-send/error-send.js');
const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'];

const router = module.exports = exports = {};

router.routes = {};

//tyler's metaprogramming idea is bomb.
methods.forEach((method) => {
  router.routes[method] = {};
  router[method.toLowerCase()] = function(pathname, callback) {
    router.routes[method][pathname] = callback;
  };
});

//hopefulling I'm adding this correctly. Not sure router.routes behaves as an
//an array like I'm attempting here.
router.routes[6] = {
  route: (req, res) => {
    parser(req)
      .then( (req) => {
        let routing = methods[req.method][req.url.pathname];

        if ( routing ) {
          return routing(req,res);

        }
        else {
          console.error('not found', req.url.pathname);
          errorSend._404(req);

        }
      })
      .catch( (err) => {
        console.error('bad request', err);
        errorSend._400(req, err);

      });
  },
};
