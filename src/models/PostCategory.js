'use strict';

const postCategoryModel = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
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

    postCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'postCategory',
        foreignKey: 'categoryId',
        otherKey: 'blogpostId',
        through: postCategory,
      });
      models.BlogPost.belongsToMany(models.Category, {
        as: 'BlogPost',
        foreignKey: 'blogpostId',
        otherKey: 'categoryId',
        through: postCategory,
      });
    };

  return postCategory;
};

module.exports = postCategoryModel;
