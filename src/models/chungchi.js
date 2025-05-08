'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class chungchi extends Model {
        static associate(models) {
            // define association here
        }
    }

    chungchi.init({
        id_chungchi: {
            type: DataTypes.INTEGER,
            primaryKey: true,          
            autoIncrement: true        
        },
        tenchungchi: DataTypes.STRING,
        tieuchuanapdung: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'chungchi',      
        freezeTableName: true      
    });

    return chungchi;
};
