'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscriber = sequelize.define('subscriber', {
    active: DataTypes.BOOLEAN,
    unsubscribe_at: DataTypes.DATE
  }, {});
  Subscriber.associate = function(models) {
    // associations can be defined here
  };
  return Subscriber;
};