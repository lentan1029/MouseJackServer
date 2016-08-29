var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

var host = {
  x: 0,
  y: 0
};

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.status(200).json({
    x: host.x,
    y: host.y
  });
});

app.post('/', function(req, res) {
  host.x += req.body.x;
  host.y += req.body.y;
  res.send('data sent');
});

setInterval(function() {
  for (var key in host) {
    host[key] = Math.floor(host[key] * 0.9 * 10) / 10;
  }
}, 1000);

app.listen(port, function() {
  console.log('app listening on port', port);
});