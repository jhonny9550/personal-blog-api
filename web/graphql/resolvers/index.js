const subscriberResolver = require('./subscriber');
const tagResolver = require('./tag');

const root = {
  Query: {
    root: () => 'Hi GraphQL!',
  },
};

module.exports = [root, subscriberResolver, tagResolver];
