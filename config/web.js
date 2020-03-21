'use strict';

const logger = require('./components/logger');
const server = require('./components/server');

module.exports = Object.assign({}, logger, server);
