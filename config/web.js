const logger = require('./components/logger');
const server = require('./components/server');

module.exports = { ...logger, ...server };
