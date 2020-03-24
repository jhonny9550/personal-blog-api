module.exports = {
  Query: {
    allTweets: (parent, { limit }, { models }) => {
      if (limit) {
        return models.tweet.findAll({ limit });
      }
      return models.tweet.findAll();
    }
  }
};
