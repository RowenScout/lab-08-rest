'use strict';

const jest = require('jest');
const server = require('../lib/server');
const agent = require('superagent');

test('should respond with a 400 if I don\'t send a title', () => {
  return agent.post('http//localhost:5500/api/notes')
  .set('Content-Type', 'applicaton/json')
  .send({
    title:'hello world',
    content: 'first note test'
  })
  .then(res => {
    expect(res.status).toEqual(200);
    //other test criteria
    //other test criteria
    
  })
})
