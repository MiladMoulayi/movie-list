var db = require('../db');

module.exports = {

  getAll: function (callback) {
    // fetch all movies
    // text, username, roomname, id
    var queryStr = 'select movies.id, movies.title, movies.watched, from movies order by movies.id desc';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    // create a message for a user id based on the given username
    var queryStr = 'insert into movies(title, watched      value (? false)';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
  };