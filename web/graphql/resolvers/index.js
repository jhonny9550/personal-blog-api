const subscriberResolver = require('./subscriber');

const root = {
  Query: {
    root: (parent, args, context, info) => 'Hi GraphQL!'
  }
};

module.exports = [root, subscriberResolver];
