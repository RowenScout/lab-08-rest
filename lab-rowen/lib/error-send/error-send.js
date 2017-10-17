'use strict';

//this modules writes 400 & 404 errors.

module.exports = {

  _400: (res, err) => {
    console.log(`error: ${err}`);
    res.writeHead(400, { 'Content-Type': 'text/plain' } );
    res.write('bad request');
    res.end();

  },

  _404: (res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' } );
    res.write('page not found');
    res.end();

  },
};
