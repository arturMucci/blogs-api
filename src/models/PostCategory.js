/**
 *
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (Sequelize, DataTypes) => {
  const PostCategory = Sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  PostCategory.associate = ({Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      as: 'BlogPost',
      otherKey: 'postId',
      through: 'PostCategory',
    });

    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      as: 'categories',
      otherKey: 'categoryId',
      through: 'PostCategory',
    });
  };

  return PostCategory;
};