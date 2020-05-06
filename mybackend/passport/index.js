const passport = require('passport');

//import all the Strategies from passport folder

const SigninStrategy = require('./SigninStrategy');
const SignupStrategy = require('./SignupStrategy');

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;
