const subscriberResolver = require('./subscriber');
const projectResolver = require('./project');
const tagResolver = require('./tag');
const tweetResolver = require('./tweet');
const postResolver = require('./post');

const root = {
  Query: {
    root: () => 'Hi GraphQL!'
  }
};

module.exports = [
  root,
  postResolver,
  projectResolver,
  subscriberResolver,
  tagResolver,
  tweetResolver
];
