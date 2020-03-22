const { gql } = require('apollo-server-express');

module.exports = gql`
  type Project {
    id: Int!
    name: String!
    description: String!
    date: Date!
    subtitle: String!
    image: String!
    views: Int
    content: String!
    visible: Boolean
    tags: [Tag!]
    createdAt: Date
    updatedAt: Date
  }
`;
