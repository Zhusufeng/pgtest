var express = require('express');
var bodyParser = require('body-parser');
const db = require('../db/index.js');

// create app
var app = express();

// For incoming data, parse it from chunks
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.status(200).send('GET request received!');
});

app.post('/', function(req, res) {
  res.status(201).send('POST request received. Not processed');
})

// export app
module.exports = app;