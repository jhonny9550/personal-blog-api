module.exports = {
  Query: {
    getSubscriber: (parent, { id }, { models }) =>
      models.subscriber.findOne({ where: { id } }),
    allSubscribers: (parent, args, { models }) => models.subscriber.findAll()
  },
  Mutation: {
    createSubscriber: (parent, args, { models }) => {
      console.log(args);
      return models.subscriber.create(args);
    }
  }
};
