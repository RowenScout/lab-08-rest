'use strict';

const http = require("http");
const router = require("./router");
const note = require("../route/note");

let isRunning = false;

// Just get a server running
const app = http.createServer( router.route );

module.exports = {
    start: () => {
        return new Promise( (resolve, reject) => {
          if(!isRunning){
            //start server
          }
            // Handle error
        })
    },

    stop: () => {
        return new Promise( (resolve,reject) => {
          if(isRunning){
            //kill server
          }
            // Handle error
            // Check
        });

    }
}
