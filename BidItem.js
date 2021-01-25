
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const BidItem = sequelize.define('BidItem', {
    id: {
        type: DataTypes.STRING
    },
    bid_id: {
        type: DataTypes.INTEGER
    },
    item_id: {
        type: DataTypes.INTEGER
    },
    qunt: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    },
    recieve_time: {
        type: DataTypes.DATEONLY
    },
});