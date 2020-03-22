'use strict';

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    subtitle: DataTypes.STRING,
    image: DataTypes.STRING,
    views: DataTypes.INTEGER,
    content: DataTypes.STRING,
    visible: DataTypes.BOOLEAN
  }, { underscored: true });
  Project.associate = (models) => {
    Project.belongsToMany(models.tag, {
      through: 'tag_items',
      as: 'tags',
      foreignKey: {
        name: 'projectId',
        field: 'project_id'
      }
    });
  };
  return Project;
};