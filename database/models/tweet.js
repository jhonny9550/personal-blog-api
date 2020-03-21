'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('tweet', {
    text: DataTypes.STRING,
    user: DataTypes.JSONB
  }, {});
  Tweet.associate = function(models) {
    // associations can be defined here
  };
  return Tweet;
};