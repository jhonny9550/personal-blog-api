module.exports = {
  Query: {
    getTag: async (parent, { id }, { models }) => models.Tag.findOne({ where: { id } }),
    getTagByName: (parent, { name }, { models }) => models.Tag.findOne({ where: { name } }),
    allTags: (parent, args, { models }) => models.Tag.findAll(),
  },
  Mutation: {
    createTag: (parent, args, { models }) => models.Tag.create(args),
    updateTag: async (parent, { id, name }, { models }) => {
      const tag = await models.Tag.findOne({ where: { id } });
      if (tag) {
        tag.name = name;
        await tag.save();
      }
      return tag;
    },
    deleteTag: async (parent, { id }, { models }) => {
      const tag = await models.Tag.findOne({ where: { id } });
      if (!tag) {
        return {
          code: 'instance/delete',
          message: 'tag not found',
          ok: false,
        };
      }
      await tag.destroy();
      return {
        code: 'instance/delete',
        message: 'tag removed succesfully',
        ok: true,
      };
    },
  },
};
