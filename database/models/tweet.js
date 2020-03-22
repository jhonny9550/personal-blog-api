'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('tweet', {
    text: DataTypes.STRING,
    user: DataTypes.JSONB,
    sanitized: DataTypes.BOOLEAN,
    visible: DataTypes.BOOLEAN
  }, {});
  return Tweet;
};