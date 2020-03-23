'use strict';

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'project',
    {
      name: {
        type: DataTypes.STRING,
        allowsNull: false,
        validate: { notEmpty: true }
      },
      description: {
        type: DataTypes.STRING,
        allowsNull: false,
        validate: { notEmpty: true }
      },
      date: { type: DataTypes.DATE, allowsNull: false },
      subtitle: {
        type: DataTypes.STRING,
        allowsNull: false,
        validate: { notEmpty: true }
      },
      image: {
        type: DataTypes.STRING,
        allowsNull: false,
        validate: { notEmpty: true, isUrl: true }
      },
      views: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        defaultValue: 0,
        validate: { min: 0 }
      },
      content: {
        type: DataTypes.STRING,
        allowsNull: false,
        validate: { notEmpty: true }
      },
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
