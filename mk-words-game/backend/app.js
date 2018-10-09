const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/user');

const app = express();

mongoose.connect('mongodb+srv://Ivo:lgsDBP12zp8ZCyyQ@mkwordsgame-ssesa.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }).then(() => {
  console.log('connected to db');
}).catch(() => {
  console.log('not connected to db');
})

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, OPTIONS, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");

  next();
})

app.use('/api/users', (req, res, next) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    points: req.body.points
  });
  res.json()
})

module.exports = app;
