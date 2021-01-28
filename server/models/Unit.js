
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Unit extends Model {}
Unit.init({
    unit_id: {
        type: DataTypes.INTEGER
    },
    unit: {
        type: DataTypes.STRING
    }
}, {modelName: "Unit"});