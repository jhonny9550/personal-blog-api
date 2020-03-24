module.exports = {
  Query: {
    getProject: (parent, { id }, { models }) => models.project.findOne({ where: { id }}),
    allProjects: (parent, { tag }, { models }) => models.project.findAll()
  },
  Mutation: {
    createProject: (parent, args, { models }) => models.project.create(args)
  }
}