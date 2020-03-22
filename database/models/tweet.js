'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('tweet', {
    date: DataTypes.DATE,
    tweetId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    user: DataTypes.JSONB,
    sanitized: DataTypes.BOOLEAN,
    visible: DataTypes.BOOLEAN,
    url: DataTypes.STRING
  }, { underscored: true });
  return Tweet;
};