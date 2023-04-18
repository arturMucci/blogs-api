'use strict';

const CategoryModel = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tablename: 'categories',
    underscored: true,
  },
  );

  return category;
};

module.exports = CategoryModel;