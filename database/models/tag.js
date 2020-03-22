'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, { underscored: true });
  Tag.associate = (models) => {
    Tag.belongsToMany(models.project, {
      through: 'tag_items',
      as: 'projects',
      foreignKey: {
        name: 'tagId',
        field: 'tag_id'
      }
    });
  };
  return Tag;
};
