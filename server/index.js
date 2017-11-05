const express = require('express');
const db = require('../db/index');
const parser = require('body-parser');

const app = express();

const port = 3000;

// RUN PARSER STUFF
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

// PULL STATIC FILES USING EXPRESS HERE, LOG PATHNAME TO CHECK
app.use(express.static(__dirname + '/../client/public'));

// GET REQUEST HERE
app.get('/', function(req, res) {
  res.send('GET RECEIVED BY SERVER');
})

// POST REQUEST HERE
app.post('/', function(req, res) {
  res.send('POST RECEIVED BY SERVER');
})

// TEST CONNECTION TO DB HERE - TEST SUCCESSFULLY LOGGED RESULTS
// let testQueryStr = 'select * from inforoster';
// db.query(testQueryStr, function(err, results) {
//   console.log(results);
// })

app.listen(port, function() {
  console.log('LISTENING IN ON PORT ', port);
})