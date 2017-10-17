'use strict';

//this modules handles routing for notes.
const Note = require('./model.js');
const router = require('../route/router.js');

let notes = [];

let sendStatus = (res, status, msg) => {
  res.writeHead(status);
  res.write(msg);
  res.end();

};

let sendJSON = (res, status, data) => {
  res.writeHead(status, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(data));

};

let checkContent = (req) => {
  if(!req.body.title) sendStatus(res, 400, 'missing title');
  if(!req.body.content) sendStatus(res, 400, 'missing Content');

};

router.get('/api/notes', (req, res) => {
  let id = req.url && req.url.query && req.url.query.id;

  if(id){
    let note = notes.filter((note) => {
      return note.id === id;

    });

    if(note) sendJSON(res, 200, note);
    else sendStatus(res, 400, 'invalid note');

  } else {
    let showAll = { notes: notes };
    sendJSON(res, 200, showAll);

  }
});

router.post('/api/notes', function(req, res) {

  checkContent(req);

  let id = req.url && req.url.query && req.url.query.id;

  if(id){
    let note = notes.filter((note) => {
      return note.id === id;

    });

  let note = new Note(req.body);
  notes.push(note);

  sendJSON(res, 200, note);

});

router.put('/api/notes', function(req, res) {

  checkContent(req);
  let id = req.url && req.url.query && req.url.query.id;

  if(id){
    notes = notes.filter((note) => {
      return note.id !== id;

    });

    let updatedNote = new Note(req.body);
    notes.push(updatedNote);
    sendJSON(res, 200, updatedNote);

  } else {
    sendStatus(res, 400, 'bad note'); }
});

router.delete('/api/notes', function(req, res) {
  let id = req.url && req.url.query && req.url.query.id;

  if(id){
    notes = notes.filter((note) => {
      return note.id !== id;

    });
    sendStatus(res, 204);

  } else {
    sendStatus(res, 400, 'bad request');
  }
});
