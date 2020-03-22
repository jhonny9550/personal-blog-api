'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = (models) => {
    Tag.belongsToMany(models.Project, {
      through: 'tag_item',
      as: 'projects',
      foreignKey: 'tagId'
    });
  };
  return Tag;
};
