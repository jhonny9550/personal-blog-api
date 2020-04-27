import postSchema from './post';
import projectSchema from './project';
import subscriberSchema from './subscriber';
import tagSchema from './tag';
import tweetSchema from './tweet';
import { gql } from 'apollo-server-express';

const common = gql`
  scalar Date

  type Status {
    message: String
    code: String!
    ok: Boolean!
  }

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }

`;

export default [
  common,
  postSchema,
  projectSchema,
  subscriberSchema,
  tagSchema,
  tweetSchema
];
