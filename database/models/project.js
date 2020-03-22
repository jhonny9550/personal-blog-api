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
  }, {});
  Project.associate = (models) => {
    Project.belongsToMany(models.Tag, {
      through: 'tag_item',
      as: 'tags',
      foreignKey: 'projectId'
    });
  };
  return Project;
};