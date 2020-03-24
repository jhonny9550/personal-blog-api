const { gql } = require('apollo-server-express');

module.exports = gql`
  type Tag {
    id: Int!
    name: String!
    projects: [Project!]
    createdAt: Date
    updatedAt: Date
  }
  extend type Query {
    getTag(id: String!): Tag
    getTagByName(name: String!): Tag
    allTags: [Tag!]
  }
  extend type Mutation {
    createTag(name: String!): Tag!
    updateTag(name: String!): Tag
    deleteTag(id: Int!): Status
  }
`;
