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
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      timeReading: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        validate: { min: 0 }
      },
      thumbnail: {
        type: DataTypes.STRING,
        validate: { isUrl: true }
      },
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
