export default {
  Query: {
    getSubscriber: (_, { email }, { models }) =>
      models.Subscriber.findOne({ where: { email } }),
    allSubscribers: (parent, { active }, { models }) => {
      if (active === undefined || active === null) {
        return models.Subscriber.findAll();
      }
      return models.Subscriber.findAll({ where: { active } });
    },
  },
  Mutation: {
    createSubscriber: (parent, args, { models }) =>
      models.Subscriber.create(args),
    toggleSubscription: async (parent, { email }, { models }) => {
      const subscriber = await models.Subscriber.findOne({ where: { email } });
      if (subscriber) {
        subscriber.active = !subscriber.active;
        if (!subscriber.active) {
          subscriber.unsubscribeAt = new Date();
        }
        await subscriber.save();
      }
      return subscriber;
    },
    deleteSubscriber: async (parent, { email }, { models }) => {
      const subscriber = await models.Subscriber.findOne({ where: { email } });
      if (!subscriber) {
        return {
          code: 'instance/delete',
          message: 'subscriber not found',
          ok: false,
        };
      }
      await subscriber.destroy();
      return {
        code: 'instance/delete',
        message: 'subscriber removed succesfully',
        ok: true,
      };
    },
  },
};
