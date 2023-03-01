"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_master extends Model {
        static associate({ Employee_master, Order_product, Deposito }) {
            // this.belongsTo(Employee_master, {
            //     foreignKey: "Employee_id",
            //     as: "employee_master",
            // });
            // this.belongsTo(Deposito, {
            //     foreignKey: "Deposito_id",
            //     as: "deposito",
            // });
            this.hasMany(Order_product, {
                foreignKey: "Order_id",
                onDelete: "CASCADE",
                as: "order_product",
            });
        }
    }
    Order_master.init(
        {
            Order_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            Total_price: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            Fecha: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Client_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Order_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Tipo_de_Cliente: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Metodo_de_Pago: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            Employee_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Deposito_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            //-----------Employee_id is association---------------------------
            // Employee_id: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            // },
            //----------------------------------------------------------------
        },
        {
            sequelize,
            tableName: "order_master",
            modelName: "Order_master",
        }
    );
    return Order_master;
};
