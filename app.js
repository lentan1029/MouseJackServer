var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var x = 0;
var y = 0;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.status(200).json({
    x: x,
    y: y
  });
});

app.post('/', function(req, res) {
  console.log(req.body);
  res.send('sent data');
});

app.listen(port, function() {
  console.log('app listening on port', port);
});