const { gql } = require('apollo-server-express');

module.exports = gql`
  type Post {
    id: Int!
    draft: Boolean
    date: Date!
    title: String!
    description: String!
    timeReading: Int!
    thumbnail: String!
    views: Int
    visible: Boolean
    createdAt: Date
  }
`;
