'use strict';

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'project',
    {
      name: {
        type: DataTypes.STRING,
        allowsNull: false
      },
      description: { type: DataTypes.STRING, allowsNull: false },
      date: { type: DataTypes.DATE, allowsNull: false },
      subtitle: { type: DataTypes.STRING, allowsNull: false },
      image: { type: DataTypes.STRING, allowsNull: false },
      views: { type: DataTypes.INTEGER, allowsNull: false, defaultValue: 0 },
      content: { type: DataTypes.STRING, allowsNull: false },
      visible: {
        type: DataTypes.BOOLEAN,
        allowsNull: false,
        defaultValue: true
      }
    },
    { underscored: true }
  );
  Project.associate = models => {
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
