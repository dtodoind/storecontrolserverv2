"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {
        static associate({ Products_data }) {
            this.hasMany(Products_data, {
                foreignKey: "Category_id",
                onDelete: "CASCADE",
                as: "products_data",
            });
        }
    }
    Categories.init(
        {
            Category_id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "categories",
            modelName: "Categories",
        }
    );
    return Categories;
};
