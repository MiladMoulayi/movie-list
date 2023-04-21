var models = require('../models');

module.exports = {

  get: function (req, res) {
    models.movies.getAll(function(err, results) {
      if (err) {
        console.error('Unable to retrieve movies from the database: ', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    var params = [req.body.title, req.body.watched];
    models.movies.create(params, function(err, results) {
      if (err) {
        console.error('Unable to post movies to the database: ', err);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  }
  };
