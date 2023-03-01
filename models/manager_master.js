"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Manager_master extends Model {
        static associate({}) {}
    }
    Manager_master.init(
        {
            Manager_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            Full_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "manager_master",
            modelName: "Manager_master",
        }
    );
    return Manager_master;
};
