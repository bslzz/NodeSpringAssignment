const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/userSchema');
const bcrypt = require('bcrypt');

const LoginStrategy = new LocalStrategy(function (username, password, done) {
  User.findOne({ username: username }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return done('Email or Password not valid', null);
    }
    return done(null, user);
  });
});

module.exports = LoginStrategy;
