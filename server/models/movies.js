var db = require('../db');

module.exports = {

  getAll: function (callback) {
    // fetch all movies
    // text, username, roomname, id
    var queryStr = 'select * from movies';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    // create a message for a user id based on the given username
    var queryStr = 'insert into movies(title, watched) \
                    value (?, false)';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  },
  update: function (params, callback) {
    // create a message for a user id based on the given username
    var queryStr = 'update movies set watched = ? \
                    where title = ?';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
  };
