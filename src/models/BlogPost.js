/**
 *
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (Sequelize, DataTypes) => {
  const BlogPost = Sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
    },
    updated: {
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
    },
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'blog_posts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return BlogPost;
};