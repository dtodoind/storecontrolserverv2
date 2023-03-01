"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_product extends Model {
        static associate({ Products_data, Order_master }) {
            this.belongsTo(Products_data, {
                foreignKey: "Product_id",
                as: "products_data",
            });
            this.belongsTo(Order_master, {
                foreignKey: "Order_id",
                as: "order_master",
            });
        }
    }
    Order_product.init(
        {
            Order_pro_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            Qty: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Total_price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            parentArray: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            childArray: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            //-------------ASSOCIATIONS---------------------------
            // Product_id: 1,             Foreign Key
            // Order_id: 1            Foreign Key
            //----------------------------------------------------------------
        },
        {
            sequelize,
            tableName: "order_product",
            modelName: "Order_product",
        }
    );
    return Order_product;
};
