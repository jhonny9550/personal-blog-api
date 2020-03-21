'use strict';

const config = require('../config');
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const withGracefulShutdown = require('http-shutdown');
const once = require('lodash/once');
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const startServer = once(() => {
  const message = config.isDevelopment
    ? `\n\n  [Force] Booting on port ${config.server.port}... \n`
    : `\n\n  [Force] Started on ${config.server.appUrl}. \n`;
  const server = withGracefulShutdown(http.createServer(app));
  const stopServer = once(() => {
    server.shutdown(() => {
      console.log('Closed existing connections.');
      process.exit(0);
    });
  });

  // if (KEEPALIVE_TIMEOUT_SECONDS) {
  //   console.log(
  //     "Setting keepAliveTimeout to " + KEEPALIVE_TIMEOUT_SECONDS + " sec."
  //   )
  //   server.keepAliveTimeout = Number(KEEPALIVE_TIMEOUT_SECONDS) * 1000
  // }

  // if (HEADERS_TIMEOUT_SECONDS) {
  //   console.log(
  //     "Setting headersTimeout to " + HEADERS_TIMEOUT_SECONDS + " sec."
  //   )
  //   server.headersTimeout = Number(HEADERS_TIMEOUT_SECONDS) * 1000
  // }
  server.listen(config.server.port, '0.0.0.0', () => console.log(message));
  process.on('SIGTERM', stopServer);
});

startServer();
