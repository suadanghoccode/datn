'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Loaitau extends Model {
        static associate(models) {
            // Định nghĩa các quan hệ nếu cần thiết
        }
    }

    Loaitau.init({
        id_loaitau: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tenloaitau: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Loaitau',
        freezeTableName: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        tableName: 'loaitau'
    });

    return Loaitau;
};
