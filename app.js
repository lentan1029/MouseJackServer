var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

var host = {
  x: 0,
  y: 0
};

var allowCrossDomain = function(req, res, next) { //enable CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Max-Age', 10);
  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);
app.use('/public', express.static('public'));
app.use(bodyParser.json());

app.get('/host', function(req, res) {
  res.json({
    x: host.x,
    y: host.y
  });
});

app.post('/user', function(req, res) {

  if (req.body === undefined) {
    res.end('body empty');
    return;
  }

  if (Number.isInteger(req.body.x) === false || Number.isInteger(req.body.y) === false) {
    res.end('x and y must be integers');
    return;
  }
  
  if (Math.abs(host.x) <= 100 && Math.abs(host.x + req.body.x) <= 100) {
    host.x += req.body.x;
  }
  if (Math.abs(host.y) <= 100 && Math.abs(host.y + req.body.y) <= 100) {
    host.y += req.body.y;
  }
  res.status(201);
  res.json({
    host: host,
    reqbody: req.body
  });
});

setInterval(function() {
  for (var key in host) {
    if (host[key] >= 0) {
      host[key] = Math.floor(host[key] * 0.9);
    } else {
      host[key] = Math.ceil(host[key] * 0.9);
    }
  }
}, 50);

app.listen(port, function() {
  console.log('app listening on port', port);
});
