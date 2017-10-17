'use strict';

const http = require('http');
const router = require('./route/router.js');
const note = require('./note/routes.js');

let serverUp = false;

const server = http.createServer( router.routes );

module.exports = {

  start: () => {
    return new Promise( (resolve, reject) => {

      if(! serverUp) {

        server.listen(process.env.PORT, (err) => {

          if(err) {

            reject(err);

          }
          else {

            serverUp = true;
            resolve(console.log(`server up on port : ${process.env.PORT}`));
          }
        });

      } else {

        reject(console.log('server is already up'));

      }
    });
  },

  stop: () => {

    return new Promise( (resolve, reject) => {

      if(! serverUp) {

        reject(console.log('server is not running'));

      }

      else {

        server.close( err => {

          if(err) {

            reject(err);

          }

          else {

            serverUp = false;
            resolve(console.log('shutting down server'));

          }
        });
      }
    });
  },
};
