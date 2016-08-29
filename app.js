var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

var host = {
  x: 0,
  y: 0
};

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

app.use(bodyParser.json());

app.get('/host', function(req, res) {
  res.set(defaultCorsHeaders);
  res.json({
    x: host.x,
    y: host.y
  });
});

app.post('/user', function(req, res) {
  host.x += req.body.x;
  host.y += req.body.y;
  res.status(201);
  res.send('data sent');
});

setInterval(function() {
  for (var key in host) {
    if (host[key] >= 0) {
      host[key] = Math.floor(host[key] * 0.9 * 100) / 100;
    } else {
      host[key] = Math.ceil(host[key] * 0.9 * 100) / 100;
    }
  }
}, 50);

app.listen(port, function() {
  console.log('app listening on port', port);
});