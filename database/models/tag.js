'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = (models) => {
    // associations can be defined here
    Tag.belongsToMany(models.Project, {
      through: 'tag_item',
      foreignKey: 'tagId'
    });
  };
  return Tag;
};
