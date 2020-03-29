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
    createProject: (parent, args, { models }) => {
      models.Project.create(args);
    },
  },
};
