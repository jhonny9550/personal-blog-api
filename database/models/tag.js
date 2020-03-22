'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: { type: DataTypes.STRING, allowsNull: false }
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
