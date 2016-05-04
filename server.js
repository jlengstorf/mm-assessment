var webpack = require('webpack');
var config = require('./webpack.config');

var app = new (require('express'))();
var port = 3100;

var compiler = webpack(config);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, error => {
  if (error) {
    console.log(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open http://localhost:%s/ in your browser.", port, port);
  }
});
