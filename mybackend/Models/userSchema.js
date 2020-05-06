const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true, dropDups: true },
  },

  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  confirm_password: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
