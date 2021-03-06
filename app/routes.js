var Item = require('./models/item');
var Stock = require('./models/stock');
var express = require('express');
var passport = require('passport');
var User = require('./models/user');
var mongoose = require('mongoose');


module.exports = function(app){

  app.post('/user/items', function(req, res) {
      Item.find({'user': req.body.user}, function(err, todos) {
          if (err)
              res.send(err)

          res.json(todos);
      });
  });

  app.post('/user/stocks', function(req, res) {
      Stock.find({'user': req.body.user}, function(err, stocks) {
          if (err)
              res.send(err)

          res.json(stocks);
      });
  });

  app.post('/user/edit/item', function(req, res) {

    Item.findByIdAndUpdate(req.body.id,
      {
        $set: {
          desc: req.body.desc,
          value: req.body.value,
          type: req.body.type
        }
    }, function(err, todo) {
      // get and return all the todos after you create another
      Item.find({'user': req.body.user}, function(err, todos) {
          if (err)
              res.send(err)
          res.json(todos);
      });
    });

  });

  app.post('/user/add/stock', function(req, res) {
      Stock.create({
          user: req.body.user,
          code : req.body.code,
          quantity: req.body.quantity,
          buyValue: req.body.buyValue,
          buyDate: new Date()
      }, function(err, stock) {
          if (err)
              res.send(err);

          Stock.find({'user': req.body.user}, function(err, stocks) {
              if (err)
                  res.send(err)
              res.json(stocks);
          });
      });

  });

  app.post('/user/add/item', function(req, res) {
      Item.create({
          user: req.body.user,
          desc : req.body.desc,
          value: req.body.value,
          type: req.body.type
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
  app.delete('/user/delete/item/:item_id', function(req, res) {
      Item.remove({
          _id : req.params.item_id
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

app.post('/user/status', function(req, res){
  console.log(req.body.user, 'oi');
  Item.aggregate([
        { $match: {
            user: mongoose.Types.ObjectId(req.body.user)
        }},
        { $group: {
            _id: null,
            balance: { $sum: "$value"  }
        }}
    ], function(err, result){
    console.log(err, result);
    res.json(result);
  });
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
