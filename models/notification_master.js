"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Notification_master extends Model {
        // static associate({ Notification_master }) {
        //     this.hasMany(Notification_master, { foreignKey: "userId", as: "posts" });
        // }
    }
    Notification_master.init(
        {
            Notify_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            Title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Sender_id: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            Message: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "notification_master",
            modelName: "Notification_master",
        }
    );
    return Notification_master;
};
