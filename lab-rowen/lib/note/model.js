'use strict';

// this module is a note constructor
const uuid = require('uuid/v1');

class Note{
  constructor(input) {
    this.id = uuid();
    this.createdOn = new Date();
    this.title = input.title || '';
    this.content = input.content || '';

  }
}

module.exports = Note;
