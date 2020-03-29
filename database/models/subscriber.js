module.exports = (sequelize, DataTypes) => {
  const Subscriber = sequelize.define(
    'Subscriber',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      unsubscribeAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    { underscored: true },
  );
  return Subscriber;
};
