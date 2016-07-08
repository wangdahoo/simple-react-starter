var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

var DEVELOPMENT = 'development';
var PRODUCTION = 'production';

var env = process.env.NODE_ENV || DEVELOPMENT

app.set('port', (process.env.PORT || 5000));

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var config_file = env == PRODUCTION ? './webpack.config' : './webpack.config.dev';
var config = require(config_file);
var compiler = webpack(config);

// use webpack-dev-middleware for DEVELOPMENT
if (env == DEVELOPMENT) {

  var middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
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
  app.use('/', express.static(path.join(__dirname, config.output.publicPath)));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, config.output.publicPath + '/index.html')));
    res.end();
  });
} else {
  app.use('/', express.static(path.join(__dirname, 'dist')));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
  });
}

app.listen(app.get('port'), function onStart(err) {
  if (err) {
    console.log(err);
  }

  console.log('==> Server Listening on port: http://localhost:' + app.get('port') + '/');
});
