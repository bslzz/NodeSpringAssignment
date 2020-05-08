const express = require('express');
const session = require('express-session');
const app = express();

require('dotenv').config();

const mongoose = require('mongoose');
const passport = require('./passport');

const initMongoose = require('./init-mongoose');

const routes = require('./Routes/userRoutes');

const PORT = process.env.PORT || 5000;

//Data parsing.. Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({ secret: 'cats', resave: 'false', saveUninitialized: 'false' })
);

initMongoose(mongoose);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
