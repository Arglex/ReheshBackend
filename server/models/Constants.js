
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Constants extends Model {}
Constants.init({
    cons_id: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    },
    condition: {
        type: DataTypes.STRING
    },
    price_value: {
        type: DataTypes.STRING
    }
}, {modelName: "Constants"});