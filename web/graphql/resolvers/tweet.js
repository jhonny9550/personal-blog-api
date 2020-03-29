module.exports = {
  Query: {
    allTweets: (parent, { limit }, { models }) => {
      if (limit) {
        return models.Tweet.findAll({ limit });
      }
      return models.Tweet.findAll();
    },
  },
};
