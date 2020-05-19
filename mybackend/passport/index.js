const passport = require('passport');
const User = require('../Models/userSchema');

passport.serializeUser((user, done) => {
  done(null, user.username);
});

// first tries to search the user from the database

passport.deserializeUser((username, done) => {
  User.findOne({ username })
    .lean()
    .exec((err, user) => {
      done(err, user); //after it finds the user, this makes the user available upon request
    });
});

//import all the Strategies from passport folder

const SigninStrategy = require('./SigninStrategy');
const RegisterStrategy = require('./SignupStrategy');

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', RegisterStrategy);

module.exports = passport;
