'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'post',
    {
      date: {
        type: DataTypes.DATE,
        allowsNull: false,
        defaultValue: DataTypes.NOW
      },
      title: { type: DataTypes.STRING, allowsNull: false },
      description: { type: DataTypes.STRING, allowsNull: false },
      timeReading: { type: DataTypes.INTEGER, allowsNull: false },
      thumbnail: { type: DataTypes.STRING, allowsNull: false },
      views: { type: DataTypes.INTEGER, allowsNull: false, defaultValue: 0 },
      draft: { type: DataTypes.BOOLEAN, allowsNull: false, defaultValue: true },
      visible: {
        type: DataTypes.BOOLEAN,
        allowsNull: false,
        defaultValue: true
      }
    },
    { underscored: true }
  );
  return Post;
};
