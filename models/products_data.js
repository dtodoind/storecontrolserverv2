"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Products_data extends Model {
        static associate({ Categories, Order_product, Deposito }) {
            this.belongsTo(Categories, {
                foreignKey: "Category_id",
                as: "categories",
            });
            this.hasMany(Order_product, {
                foreignKey: "Product_id",
                onDelete: "CASCADE",
                as: "order_product",
            });
            this.belongsTo(Deposito, {
                foreignKey: "Deposito_id",
                as: "deposito",
            });
        }
    }
    Products_data.init(
        {
            Product_id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            codigo: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Image: {
                type: DataTypes.TEXT("long"),
                allowNull: false,
            },
            Color: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Size: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Stock: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            precioVenta: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            costoCompra: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            costoMenor: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            //-----------CATEGORY ID ASSOCIATIONS---------------------------
            // Category_id: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            // },

            //----------------------------------------------------------------
        },
        {
            sequelize,
            tableName: "products_data",
            modelName: "Products_data",
        }
    );
    return Products_data;
};
