'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, { underscore: true });
  Tag.associate = (models) => {
    Tag.belongsToMany(models.Project, {
      through: 'tag_item',
      as: 'projects',
      foreignKey: {
        name: 'tagId',
        field: 'tag_id'
      }
    });
  };
  return Tag;
};
