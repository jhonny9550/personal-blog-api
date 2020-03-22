module.exports = {
  Query: {
    getSubscriber: (parent, { email }, { models }) =>
      models.subscriber.findOne({ where: { email } }),
    allSubscribers: (parent, args, { models }) => models.subscriber.findAll()
  },
  Mutation: {
    createSubscriber: (parent, args, { models }) => {
      console.log(args);
      return models.subscriber.create(args);
    }
  }
};
