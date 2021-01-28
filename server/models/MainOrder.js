
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class MainOrder extends Model {}
MainOrder.init({
    customer_id: {
        type: DataTypes.STRING
    },
    order_id: {
        type: DataTypes.INTEGER
    }
}, {modelName: "MainOrder"});