'use strict';

const Note = require('../../model/note');
const router = require('../router');

let notes = [];

let getNote = (id) => {

  notes.forEach = (note) => {

  };
};

let sendStatus = (res, status, msg) => {

  res.writeHead(status);
  res.write(msg);
  res.end();

};

let sendJSON = (res, status, data) => {

  res.writeHead(status, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(data));

};

router.get('/api/notes', (req, res) => {

  let id = req.url && req.url.query && req.url.query.id;

  if(id){

    let note = notes.filter((note) => {
      return note.uuid = id;
    });

    if(note) sendJSON(res, 200, note);
    else sendStatus(res, 400, 'Invalid Note');

  } else {

    let showAll = { notes: notes };
    sendJSON(res, 200, showAll);

  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();

});

router.post('/api/notes', function(req, res) {

  console.log('in the Post');

  if(! req.body.title) sendStatus(res, 400, 'Missing Title');
  if(! req.body.content) sendStatus(res, 400, 'Missing Content');

  let note = new Note(req.body);
  notes.push(note);

  sendJSON(res, 200, note);

});

router.put('/', function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello from Put');
  res.end();

});

router.patch('/', function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello from Patch');
  res.end();

});
