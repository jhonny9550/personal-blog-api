const postSchema = require('./post');
const projectSchema = require('./project');
const subscriberSchema = require('./subscriber');
const tagSchema = require('./tag');
const tweetSchema = require('./tweet');
const { gql } = require('apollo-server-express');

const common = gql`
  scalar Date

  type Query {
    hi: String
  }
`;

module.exports = [
  common,
  postSchema,
  projectSchema,
  subscriberSchema,
  tagSchema,
  tweetSchema
];
