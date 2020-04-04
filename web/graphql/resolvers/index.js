const subscriberResolver = require('./subscriber');
const postResolver = require('./post');
const projectResolver = require('./project');
const tagResolver = require('./tag');

const root = {
  Query: {
    root: () => 'Hi GraphQL!',
  },
};

module.exports = [root, postResolver, projectResolver, subscriberResolver, tagResolver];
