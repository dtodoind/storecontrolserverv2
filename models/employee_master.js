"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Employee_master extends Model {
        static associate({ Order_master, Deposito }) {
            // this.hasMany(Order_master, {
            //     foreignKey: "Employee_id",
            //     onDelete: "CASCADE",
            //     as: "order_master",
            // });
            this.belongsTo(Deposito, {
                foreignKey: "Deposito_id",
                as: "deposito",
            });
        }
    }
    Employee_master.init(
        {
            Employee_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            UserName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            First_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Salary: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            Join_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            Leaves: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "employee_master",
            modelName: "Employee_master",
        }
    );
    return Employee_master;
};
