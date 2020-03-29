const { gql } = require('apollo-server-express');

module.exports = gql`
  type Post {
    id: Int!
    draft: Boolean
    date: Date!
    title: String!
    description: String!
    timeReading: Int
    thumbnail: String!
    views: Int
    visible: Boolean
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    getPost(id: Int!): Post
    allPosts(draft: Boolean, visible: Boolean, date: Date): Post
  }

  extend type Mutation {
    createPost(draft: Boolean, date: Date!, title: String, description: String, thumbnail: String, visible: Boolean): Post!
    updatePost(id: Int!, draft: Boolean, date: Date, title: String, description: String, thumbnail: String, visible: Boolean): Post
    incrementPostViews(id: Int!): Status
  }
`;
