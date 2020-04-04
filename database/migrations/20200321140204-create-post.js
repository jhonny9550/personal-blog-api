module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    content: {
      type: Sequelize.STRING,
      defaultValue: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    draft: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    content: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    time_reading: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
    views: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    visible: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('posts'),
};
