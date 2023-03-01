"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Expense_master extends Model {
        static associate({ Expense_master }) {
            this.belongsTo(Expense_master, {
                foreignKey: "CategoryExpense_id",
                as: "expense_categories",
            });
        }
    }
    Expense_master.init(
        {
            ExpenseId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Total: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            Description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            PayMethod: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "expense_master",
            modelName: "Expense_master",
        }
    );
    return Expense_master;
};
