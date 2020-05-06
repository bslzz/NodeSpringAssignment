const express = require('express');
const app = express();

require('dotenv').config();

const cors = require('cors');

const mongoose = require('mongoose');
const passport = require('./passport');

const initMongoose = require('./init-mongoose');

const routes = require('./Routes/userRoutes');

const PORT = process.env.PORT || 5000;

//Data parsing.. Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initMongoose(mongoose);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use(cors());

app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
