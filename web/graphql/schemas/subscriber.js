const { gql } = require('apollo-server-express');

module.exports = gql`
  type Subscriber {
    email: String!
    active: Boolean!
    createdAt: Date
    updatedAt: Date
    unsubscribeAt: Date
  }
`;
