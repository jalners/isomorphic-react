require('node-jsx-babel').install({extension: '.jsx'});

var _ = require('lodash');
var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');
var React = require('react');

var main = React.createFactory(require('./src/js/main'));
var template = fs.readFileSync(path.join('./public/views/index.html'), 'utf8');

var app = express();
var port = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/public/'));

app.get('*', function(req, res) {
  var application = main();
  var data = {
    application: React.renderToString(application)
  };
  var html = _.template(template)(data);
  res.send(html);
});

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});