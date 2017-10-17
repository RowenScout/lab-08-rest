'use strict';

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

router.get('/api/notes', (req, res) => {

  let id = req.url && req.url.query && req.url.query.id;

  if(id){

    let note = notes.filter((note) => {
      return note.id === id;
    });

    if(note) sendJSON(res, 200, note);
    else sendStatus(res, 400, 'Invalid Note');

  } else {

    let showAll = { notes: notes };
    sendJSON(res, 200, showAll);

  }

});

router.post('/api/notes', function(req, res) {

  if(! req.body.title) sendStatus(res, 400, 'Missing Title');
  if(! req.body.content) sendStatus(res, 400, 'Missing Content');

  let note = new Note(req.body);
  notes.push(note);
  sendJSON(res, 200, note);

});

router.put('/api/notes', function(req, res) {

  if(! req.body.title) sendStatus(res, 400, 'Missing Title');
  if(! req.body.content) sendStatus(res, 400, 'Missing Content');

  let id = req.url && req.url.query && req.url.query.id;

  if(id){

    notes = notes.filter((note) => {
      return note.id !== id;

    });
    let updatedNote = new Note(req.body);
    notes.push(updatedNote);
    sendJSON(res, 200, updatedNote);

  } else { sendStatus(res, 400, 'Invalid Note'); }

});

router.patch('/api/notes', function(req, res) {

  let id = req.url && req.url.query && req.url.query.id;

  if(! req.body.title && ! req.body.content) sendStatus(res, 400, 'bo content!');
  if(! id) sendStatus(res, 400, 'bad request');
  else {
    let success = false;

    for(let note in notes){
      if(notes[note].id === id){
        if(req.body.title) notes[note].title = req.body.title;
        if(req.body.content) notes[note].content = req.body.content;
        success = true;
        sendJSON(res, 200, notes[note]);
      }
    }
    if(!success) sendStatus(res, 400, 'No match for id');
  }
});

router.delete('/api/notes', function(req, res) {

  let id = req.url && req.url.query && req.url.query.id;

  if(id){

    notes = notes.filter((note) => {
      return note.id !== id;
    });
    sendStatus(res, 204);

  } else {
    sendStatus(res, 400, 'Bad Request');
  }

});
