const express = require('express');
const router = express.Router();
const passport = require('../passport');

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

// router.post('/logout', (req, res) => {
//
router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    req.session.destroy((err) => {
      res.clearCookie('connect.sid');
      // Don't redirect, just print text
      res.send('Logged out');
    });
  } else {
    return res.json({ msg: 'no user to log out!' });
  }
});

router.get('/api', (req, res) => {
  res.json({ msg: 'Hello from server' });
});

module.exports = router;
