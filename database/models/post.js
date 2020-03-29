const { completedPostSchema } = require('../validators/post');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
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
  });
  return Post;
};
