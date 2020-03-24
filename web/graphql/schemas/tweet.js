const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: String!
    name: String!
    screenName: String!
    location: String!
    description: String!
    url: String!
    profileImageUrlHttps: String!
    profileBannerUrl: String!
  }

  type Tweet {
    date: Date!
    id: Int!
    tweetId: Int!
    text: String!
    sanitized: Boolean!
    user: User!
    url: String!
    visible: Boolean!
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    allTweets(limit: Int): [Tweet!]
  }
`;
