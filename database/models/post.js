/* eslint-disable no-param-reassign */
const htmlToText = require('html-to-text');
const readingTime = require('reading-time');
const { completedPostSchema } = require('../validators/post');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: {
        type: DataTypes.TEXT,
        allowsNull: false,
        defaultValue: '',
      },
      date: {
        type: DataTypes.DATE,
        allowsNull: false,
        defaultValue: DataTypes.NOW,
      },
      content: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      timeReading: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        validate: { min: 0 },
        defaultValue: 0,
      },
      thumbnail: {
        type: DataTypes.STRING,
        validate: { isUrl: true },
      },
      views: { type: DataTypes.INTEGER, allowsNull: false, defaultValue: 0 },
      draft: { type: DataTypes.BOOLEAN, allowsNull: false, defaultValue: true },
      visible: {
        type: DataTypes.BOOLEAN,
        allowsNull: false,
        defaultValue: true,
      },
    },
    { underscored: true },
  );
  Post.addHook('beforeSave', (post) => {
    const { error, value } = completedPostSchema.validate(post);
    if (error) {
      console.log('Post validation error: ', error);
      post.draft = true;
    }
    if (!post.content) {
      post.content = '';
      post.timeReading = 0;
    } else {
      const text = htmlToText.fromString(post.content);
      const { minutes } = readingTime(text);
      post.timeReading = Math.floor(minutes);
    }
  });
  return Post;
};
