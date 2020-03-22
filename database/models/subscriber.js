'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscriber = sequelize.define('subscriber', {
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    unsubscribeAt: DataTypes.DATE
  }, { underscore: true });
  return Subscriber;
};