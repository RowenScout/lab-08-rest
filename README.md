*_server*

  /api/notes

  Returns _404_ for a non-existent uri
  Returns _400_ for bad json data or bad request query

  _POST_ creates new note if title and content json is sent in request
  returns 400 if bad or incomplete json is sent

  _GET_ if an id is specified, will return the note corresponding to that id.
  IF no id is specified, will return all notes

  _PUT_ requires an id specified in request query. If no id, will send 400. If id is there, but no
  title and content, will send 400.
  Will remove the current note entry from array, and replace it with the contents of the request body.

  _PATCH_ requires an id specified in request query. If no id, will send 400. If id is there, but no
  title or content, will send 400. If there is no match for the id, will also return a 400. Will update existing entry with the provided data.

  _DELETE_ requires an id specified in request query. Will remove the corresponding entry from the Notes array. Returns a 204 No Content

  *tests*
  run with `mocha`
