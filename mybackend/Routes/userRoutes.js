const express = require('express');
const router = express.Router();

const passport = require('../passport');

//passport authentication callback

router.post('/register', (req, res, next) => {
  passport.authenticate(
    'local-signup',
    { successRedirect: '/login', failureRedirect: '/register' },
    function (error, user) {
      if (error) {
        return res.status(500).json({
          message: error || 'Internal server error',
        });
      }
      return res.json(user);
    }
  )(req, res, next);
});

router.post('/login', (req, res, next) => {
  passport.authenticate(
    'local-signin',
    { successRedirect: '/', failureRedirect: '/login' },
    function (error, user) {
      if (error) {
        return res.status(500).json({
          message: error || 'Internal server error',
        });
      }
      return res.json(user);
    }
  )(req, res, next);
});

module.exports = router;
