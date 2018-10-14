const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://Ivo:lgsDBP12zp8ZCyyQ@mkwordsgame-ssesa.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }).then(() => {
  console.log('connected to db');
}).catch(() => {
  console.log('not connected to db');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/user', userRoutes);

module.exports = app;
