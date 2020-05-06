const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/userSchema');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new LocalStrategy(function (username, password, done) {
  User.findOne({ username })
    .lean()
    .exec((err, user) => {
      if (err) {
        return done(err, null);
      }
      if (user) {
        return done('User already exists', null);
      }

      const encryptedPassword = bcrypt.hashSync(password, salt);
      const today = new Date();

      let newUser = new User({
        username,
        email: '',
        password: encryptedPassword,
        confirm_password: '',
        created: today,
      });

      newUser.save((error, addeduser) => {
        if (error) {
          return done(error, null);
        } else {
          return done(null, addeduser);
        }
      });
    });
});

module.exports = SignupStrategy;
