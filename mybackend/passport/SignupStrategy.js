const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/userSchema');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const RegisterStrategy = new LocalStrategy(
  { passReqToCallback: true, usernameField: 'username' },
  function (req, email, password, done) {
    const username = req.body.username;
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

        let newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: encryptedPassword,
        });
        newUser.save((error, addeduser) => {
          if (error) {
            return done(
              { msg: 'Error registering user to DB: ' + error },
              null
            );
          } else {
            console.log('New user registered to the DB');
            return done(null, addeduser);
          }
        });
      });
  }
);

module.exports = RegisterStrategy;
