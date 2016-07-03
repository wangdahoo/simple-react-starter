var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var config = require('./webpack.config.dev');
var compiler = webpack(config);
var middleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  headers: { // Custom headers here

  },
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.listen(app.get('port'), function onStart(err) {
  if (err) {
    console.log(err);
  }

  console.log('==> Server Listening on port: http://localhost:' + app.get('port') + '/');
});
