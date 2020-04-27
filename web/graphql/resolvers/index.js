import subscriberResolver from './subscriber';
import postResolver from './post';
import projectResolver from './project';
import tagResolver from './tag';
import tweetResolver from './tweet';

const root = {
  Query: {
    root: () => 'Hi GraphQL!',
  },
};

export default [
  root,
  postResolver,
  projectResolver,
  subscriberResolver,
  tagResolver,
  tweetResolver,
];
