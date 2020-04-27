import { gql } from 'apollo-server-express';

export default gql`
  type Tag {
    id: Int!
    name: String!
    projects: [Project!]
    createdAt: Date
    updatedAt: Date
  }
  extend type Query {
    getTag(id: Int!): Tag
    getTagByName(name: String!): Tag
    allTags: [Tag!]
  }
  extend type Mutation {
    createTag(name: String!): Tag!
    updateTag(id: Int!, name: String!): Tag
    deleteTag(id: Int!): Status
  }
`;
