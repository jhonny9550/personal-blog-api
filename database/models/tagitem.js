export default (sequelize, DataTypes) => {
  const TagItem = sequelize.define(
    'TagItem',
    {
      projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'project',
          key: 'project_id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'tag_id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    },
    { tableName: 'tag_items', underscored: true }
  );
  return TagItem;
};
