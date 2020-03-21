'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    subtitle: DataTypes.STRING,
    image: DataTypes.STRING,
    views: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  Project.associate = (models) => {
    // associations can be defined here
    Project.belongsToMany(models.Tag, {
      through: 'tag_item',
      foreignKey: 'projectId'
    });
  };
  return Project;
};