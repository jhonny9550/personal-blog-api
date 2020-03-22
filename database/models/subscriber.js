'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscriber = sequelize.define('subscriber', {
    active: DataTypes.BOOLEAN,
    unsubscribeAt: DataTypes.DATE
  }, { underscore: true });
  return Subscriber;
};