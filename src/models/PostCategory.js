'use strict';

const postCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostsCategory', {
      postId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      tablename: 'posts_categories',
      underscored: true,
    },
  );

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'categories',
        foreignKey: 'categoryId',
        otherKey: 'postId',
        through: PostCategory,
      });

      models.BlogPost.belongsToMany(models.Category, {
        as: 'blog_post',
        foreignKey: 'postId',
        otherKey: 'categoryId',
        through: PostCategory,
      });
    };

  return PostCategory;
};

module.exports = postCategoryModel;
