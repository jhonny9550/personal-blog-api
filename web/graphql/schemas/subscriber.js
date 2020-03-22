const { gql } = require('apollo-server-express');

module.exports = gql`
  type Subscriber {
    email: String!
    active: Boolean
    createdAt: Date
    updatedAt: Date
    unsubscribeAt: Date
  }

  extend type Query {
    getSubscriber(email: String!): Subscriber
    allSubscribers: [Subscriber!]
  }

  extend type Mutation {
    createSubscriber(email: String!): Subscriber!
  }

`;
