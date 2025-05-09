'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class chucvu extends Model {
        static associate(models) {
            // define association here
        }
    }

    chucvu.init({
        id_chucvu: {
            type: DataTypes.INTEGER,
            primaryKey: true,          
            autoIncrement: true        
        },
        tenchucvu: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'chucvu',      
        freezeTableName: true      
    });

    return chucvu;
};
