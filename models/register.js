"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Register extends Model {
        static associate({ Deposito }) {
           
            this.belongsTo(Deposito, {
                foreignKey: "Deposito_id",
                as: "deposito",
            });
        }
    }
    Register.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            number: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Country: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Provincia: {
                type: DataTypes.TEXT("long"),
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
            tableName: "register",
            modelName: "Register",
        }
    );
    return Register;
};
