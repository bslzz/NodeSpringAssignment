const express = require('express');
const router = express.Router();

const passport = require('../passport');

//passport authentication callback

router.post('/register', (req, res, next) => {
  passport.authenticate('local-signup', function (error, user) {
    const { username, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
      err = 'Passowrd dont match';
    }
    if (!username || !email || !password | !confirm_password) {
      err = 'Please fill all the fields';
    }

    if (error) {
      return res.status(500).send({
        message: error || 'Internal server error',
      });
    }
    return res.send(user);
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local-signin', function (error, user) {
    if (error) {
      return res.status(500).send({
        message: error || 'Internal server error',
      });
    }
    return res.send(user);
  })(req, res, next);
});

module.exports = router;
