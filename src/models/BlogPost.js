'use strict';

const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    tablename: ''
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'blog_post',
    });
  };

  return BlogPost;
};

module.exports = BlogPost;