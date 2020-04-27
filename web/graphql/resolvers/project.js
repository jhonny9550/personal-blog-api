export default {
  Query: {
    getProject: (parent, { id }, { models }) =>
      models.Project.findOne({ where: { id } }),
    allProjects: (parent, { tag }, { models }) => {
      let where = {};
      if (tag) {
        where = { id: tag };
      }
      return models.Project.findAll({
        include: [{ model: models.Tag, as: 'tags', where }],
      });
    },
  },
  Mutation: {
    createProject: async (parent, { tags, ...args }, { models }) => {
      const project = await models.Project.create(args);
      if (tags) {
        await project.addTags(tags);
        project.tags = project.tags || (await project.getTags());
      }
      return project;
    },
    updateProject: async (parent, { tags, id, ...args }, { models }) => {
      const project = await models.Project.findOne({ where: { id } });
      if (project) {
        if (tags) {
          await project.setTags(tags);
          project.tags = project.tags || (await project.getTags());
        }
        Object.keys(args).forEach((key) => {
          project[key] = args[key];
        });
        await project.save();
      }
      return project;
    },
    incrementProjectViews: async (parent, { id }, { models }) => {
      const project = await models.Project.findOne({ where: { id } });
      project.views += 1;
      await project.save();
      return project;
    },
  },
};
