'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    time_reading: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    views: DataTypes.INTEGER,
    draft: DataTypes.BOOLEAN,
    visible: DataTypes.BOOLEAN
  }, {});
  return Post;
};