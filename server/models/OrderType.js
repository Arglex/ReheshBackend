
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const OrderType = sequelize.define('OrderType', {
    type_id: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    }
});