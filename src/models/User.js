'use strict';

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
      tablename: 'users',
      underscored: true,
    },
  );

  // User.associate = (models) => {
  //   User.hasMany(models.blogPosts, {
  //     foreignKey: 'blogpostId',
  //     as: 'user'
  //   });
  // };

  return User;
};

module.exports = UserModel;