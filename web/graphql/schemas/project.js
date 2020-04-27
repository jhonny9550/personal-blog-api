import { gql } from 'apollo-server-express';

export default gql`
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

  extend type Query {
    getProject(id: Int!): Project
    allProjects(tag: Int): [Project!]
  }

  extend type Mutation {
    createProject(name: String!, description: String!, date: String!, subtitle: String!, image: String!, content: String!, tags: [Int!], visible: Boolean): Project!
    updateProject(id: Int!, name: String, description: String, date: String, subtitle: String, image: String, content: String, tags: [Int!], visible: Boolean): Project
    incrementProjectViews(id: Int!): Project
  }
`;
