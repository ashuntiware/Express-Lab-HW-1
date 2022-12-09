const express = require('express');

const app = express();

const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})

app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello Country!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello State!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello County!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello District!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello City!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello Town!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello Suburb!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello Neighborhood!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello Block!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Hello Street!</h1>');
  });

app.get('/', function (req, res) {
    res.send('<h1>Welcome Home!</h1>');
  });

app.listen(3000, function () {
    console.log('Listening on port 3000');
  });