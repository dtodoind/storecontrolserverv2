"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Expense_categories extends Model {
        static associate({ Expense_master }) {
            this.hasMany(Expense_master, {
                foreignKey: "CategoryExpense_id",
                onDelete: "CASCADE",
                as: "expense_master",
            });

        }
    }
    Expense_categories.init(
        {
            CategoryExpense_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "expense_categories",
            modelName: "Expense_categories",
        }
    );
    return Expense_categories;
};
