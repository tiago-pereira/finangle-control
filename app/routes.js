var Item = require('./models/item');


module.exports = function(app){

  app.get('/api/items', function(req, res) {
    // use mongoose to get all todos in the database
      Item.find(function(err, todos) {

          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err)
              res.send(err)

          res.json(todos); // return all todos in JSON format
      });
  });

  app.post('/api/items', function(req, res) {
      Item.create({
          desc : req.body.desc,
          value: req.body.value
      }, function(err, todo) {
          if (err)
              res.send(err);

          // get and return all the todos after you create another
          Item.find(function(err, todos) {
              if (err)
                  res.send(err)
              res.json(todos);
          });
      });

  });

  // delete a todo
  app.delete('/api/items/:item_id', function(req, res) {
      Item.remove({
          _id : req.params.todo_id
      }, function(err, todo) {
          if (err)
              res.send(err);

          // get and return all the todos after you create another
          Item.find(function(err, todos) {
              if (err)
                  res.send(err)
              res.json(todos);
          });
      });
  });

  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
      res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
}
