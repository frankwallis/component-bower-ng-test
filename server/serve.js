var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
//app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, '../')));
//app.use(express.errorHandler());

function index(req, res) {
  res.sendFile('index.html', {'root': path.join(__dirname, '../')});
};

// serve index
app.get('/', index);

// redirect all others to the index (HTML5 history)
app.get('*', index);

http.createServer(app).listen(4000, function () {
  console.log('Express server listening on port ' + 4000);
});