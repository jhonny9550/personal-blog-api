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
    allSubscribers(active: Boolean): [Subscriber!]
    activeSubscribers: [Subscriber!]
  }

  extend type Mutation {
    createSubscriber(email: String!): Subscriber!
    toggleSubscription(email: String!): Subscriber
    deleteSubscriber(email: String!): Status
  }

`;
