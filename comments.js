// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Get comments
app.get('/comments', function(req, res) {
  fs.readFile('./comments.json', 'utf-8', function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

// Create comment
app.post('/comments', function(req, res) {
  fs.readFile('./comments.json', 'utf-8', function(err, data) {
    if (err) throw err;

    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),