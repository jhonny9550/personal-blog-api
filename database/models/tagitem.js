'use strict';
module.exports = (sequelize, DataTypes) => {
  const tagItem = sequelize.define('tagItem', {
    projectId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, { underscore: true });
  return tagItem;
};