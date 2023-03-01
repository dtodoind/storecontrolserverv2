"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Sales_Activity extends Model {}
    Sales_Activity.init(
        {
            Sales_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            year: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            Jan: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Feb: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Mar: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Apr: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            May: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Jun: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Jul: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Aug: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Sep: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Oct: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Nov: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            Dec: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "sales_activity",
            modelName: "Sales_Activity",
        }
    );
    return Sales_Activity;
};
