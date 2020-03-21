'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    time_reading: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    views: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};