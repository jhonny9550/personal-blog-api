'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define(
    'tweet',
    {
      date: { type: DataTypes.DATE, allowsNull: false },
      tweetId: { type: DataTypes.INTEGER, allowsNull: false },
      text: { type: DataTypes.STRING, allowsNull: false },
      user: { type: DataTypes.JSONB, allowsNull: false },
      sanitized: {
        type: DataTypes.BOOLEAN,
        allowsNull: false,
        defaultValue: false
      },
      visible: {
        type: DataTypes.BOOLEAN,
        allowsNull: false,
        defaultValue: true
      },
      url: { type: DataTypes.STRING, allowsNull: false }
    },
    { underscored: true }
  );
  return Tweet;
};
