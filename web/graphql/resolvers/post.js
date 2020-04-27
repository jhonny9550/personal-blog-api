export default {
  Query: {
    getPost: (parent, { id }, { models }) =>
      models.Post.findOne({ where: { id } }),
    allPosts: (parent, { date, draft, visible }, { models }) => {
      const params = {};
      if (typeof date === 'string') {
        params.date = date;
      }
      if (typeof draft === 'boolean') {
        params.draft = draft;
      }
      if (typeof visible === 'boolean') {
        params.visible = visible;
      }
      return models.Post.findAll({ where: params });
    },
  },
  Mutation: {
    createPost: (parent, args, { models }) => models.Post.create(args),
    updatePost: async (parent, { id, ...args }, { models }) => {
      const post = await models.Post.findOne({ where: { id } });
      if (post) {
        Object.keys(args).forEach((key) => {
          post[key] = args[key];
        });
        await post.save();
      }
      return post;
    },
    incrementPostViews: async (parent, { id }, { models }) => {
      const post = await models.Post.findOne({ where: { id } });
      post.views += 1;
      await post.save();
      return post;
    },
  },
};
