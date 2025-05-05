'use strict';

export default (sequelize, DataTypes) => {
    const ChungChi = sequelize.define('ChungChi', {
        id_chungchi: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tenchungchi: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        tieuchuanapdung: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: 'chungchi',
        timestamps: false
    });
    return ChungChi;
};
