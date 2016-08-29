var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
  res.status(200).send('test');
})

app.listen(port, function() {
  console.log('app listening on port', port);
});