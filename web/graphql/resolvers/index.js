const subscriberResolver = require('./subscriber');
const projectResolver = require('./project');
const tagResolver = require('./tag');

const root = {
  Query: {
    root: () => 'Hi GraphQL!',
  },
};

module.exports = [root, projectResolver, subscriberResolver, tagResolver];
