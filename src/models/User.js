'use strict';

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull: false,
      field: 'display_name',
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
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