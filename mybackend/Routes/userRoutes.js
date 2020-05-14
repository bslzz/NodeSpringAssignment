const express = require('express');
const router = express.Router();
const passport = require('../passport');
const User = require('../Models/userSchema');

//passport authentication callback

router.post('/register', (req, res, next) => {
  passport.authenticate(
    'local-signup',

    function (error, user) {
      if (error) {
        return res.status(500).json({
          message: error || 'Internal server error',
        });
      }

      //persistent login
      req.login(user, (error) => {
        if (error) {
          return res.status(500).json({
            message: error || 'Internal server error',
          });
        }

        //to make sure that react knows that this user is authenticated
        user.isAuthenticated = true;
        return res.json(user);
      });
    }
  )(req, res, next);
});

router.post('/login', (req, res, next) => {
  passport.authenticate(
    'local-signin',

    function (error, user) {
      if (error) {
        return res.status(500).json({
          message: error || 'Server error',
        });
      }

      //persistent login
      req.login(user, (error) => {
        if (error) {
          return res.status(500).json({
            message: error || 'Internal server error',
          });
        }
        //to make sure that react knows that this user is authenticated
        user.isAuthenticated = true;
        return res.json(user);
      });
    }
  )(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
  // req.session.destroy((err) => {
  //   res.clearCookie('connect.sid');
  // });
});

//just for testing  purpose

router.get('/api', (req, res) => {
  res.json({ msg: 'Hello from server' });
});

router.get('/api/getdbdata', (req, res) => {
  User.find().then((data) => res.send(data));
});

module.exports = router;
