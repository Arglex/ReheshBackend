
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const MainOrder = sequelize.define('MainOrder', {
    customer_id: {
        type: DataTypes.STRING
    },
    order_id: {
        type: DataTypes.INTEGER
    }
});