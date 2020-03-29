module.exports = {
  Query: {
    getProject: (parent, { id }, { models }) => models.Project.findOne({ where: { id } }),
    allProjects: (parent, { tag }, { models }) => {
      if (tag) {
        return models.Project.findAll({ where: { tags: [tag] } });
      }
      return models.Project.findAll();
    },
  },
  Mutation: {
    createProject: async (parent, { tags, ...args }, { models }) => {
      const project = await models.Project.create(args);
      await project.addTags(tags);
      project.tags = project.tags || await project.getTags();
      return project;
    },
    updateProject: async (parent, { tags, id, ...args }, { models }) => {
      let project = await models.Project.findOne({ where: { id } });
      project = { ...project, ...args };
      await project.setTags(tags);
      await project.save();
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
