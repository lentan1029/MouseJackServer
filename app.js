var express = require('express');
var app = express();
var port = 3000;
var x = 10;
var y = 10;

app.get('/', function(req, res) {
  res.status(200).json({
    x: x,
    y: y
  });
});

app.post('/', function(req, res) {
  
});

app.listen(port, function() {
  console.log('app listening on port', port);
});