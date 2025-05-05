'use strict';
module.exports = (sequelize, DataTypes) => {
    const ChucVu = sequelize.define('chucvu', {
        id_chucvu: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        tenchucvu: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        }
    }, {
        tableName: 'chucvu',
        timestamps: true
    });
    return ChucVu;
};