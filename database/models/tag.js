export default (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      name: {
        type: DataTypes.STRING,
        allowsNull: false,
        unique: true,
        validate: { notEmpty: true },
      },
    },
    { underscored: true }
  );
  Tag.associate = (models) => {
    Tag.belongsToMany(models.Project, {
      through: models.TagItem,
      as: 'projects',
    });
  };
  return Tag;
};
