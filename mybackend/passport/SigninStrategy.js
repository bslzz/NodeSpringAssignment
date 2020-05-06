const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/userSchema');
const bcrypt = require('bcrypt');

const LoginStrategy = new LocalStrategy(function (username, password, done) {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return done(err, null);
    }
    if (!user) {
      return done('No user found', null);
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return done('Email or Password not valid', null);
    }
  });
});

module.exports = LoginStrategy;
