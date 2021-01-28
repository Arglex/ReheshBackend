
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Bid extends Model {}
Bid.init({
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
}, {modelName: "BidItem"});