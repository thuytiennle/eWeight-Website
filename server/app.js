const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { handleError } = require('./utils/error');
const apiRoutes = require('./api/routes');

global.__basedir = __dirname;

const app = express();

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true,
  limit: process.env.ENCODED_BODY_LIMIT || '100mb'
}));

app.use('/', express.static('./assets'));

// apidoc
app.use('/apidoc', express.static('./apidoc/output'));

// mount all routes on /api path
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Path not found.');
  err.statusCode = 404;

  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
