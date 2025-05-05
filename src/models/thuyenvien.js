'use strict';
module.exports = (sequelize, DataTypes) => {
    const ThuyenVien = sequelize.define('thuyenvien', {
        id_thuyenvien: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        anh: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        hoten: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        cccd: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        sodienthoai: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        chieucao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cannang: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        nhommau: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        sizegiay: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tinhtranghonnhan: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        tableName: 'thuyenvien',
        timestamps: true
    });
    return ThuyenVien;
};