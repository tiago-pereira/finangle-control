var Item = require('./models/item');
var express = require('express');
var passport = require('passport');
var User = require('./models/user');

module.exports = function(app){

  app.post('/user/items', function(req, res) {
    // use mongoose to get all todos in the database
    console.log(req.body.user);
      Item.find({'user': req.body.user}, function(err, todos) {

          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err)
              res.send(err)

          res.json(todos); // return all todos in JSON format
      });
  });

  app.post('/user/add/item', function(req, res) {
      Item.create({
          user: req.body.user,
          desc : req.body.desc,
          value: req.body.value
      }, function(err, todo) {
          if (err)
              res.send(err);

          // get and return all the todos after you create another
          Item.find({'user': req.body.user}, function(err, todos) {
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

app.post('/user/register', function(req, res) {
  console.log('entrou aqui');
  User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
    if (err) {
      console.log('deu erro');
      return res.status(500).json({err: err})
    }
    passport.authenticate('local')(req, res, function () {
      console.log('deu boa');
      return res.status(200).json({status: 'Registration successful!'})
    });
  });
});

app.post('/user/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      return res.status(401).json({err: info})
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({err: 'Could not log in user'})
      }
      res.status(200).json({status: 'Login successful!', id: user._id})
    });
  })(req, res, next);
});

app.get('/user/logout', function(req, res) {
  req.logout();
  res.status(200).json({status: 'Bye!'})
});

  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
      res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
}
