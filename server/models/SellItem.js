
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class SellItem extends Model {}
SellItem.init({
    item_id: {
        type: DataTypes.INTEGER
    },
    sub_order: {
        type: DataTypes.INTEGER
    },
    desc: {
        type: DataTypes.STRING
    },
    IAF_number: {
        type: DataTypes.STRING
    },
    technical_spec: {
        type: DataTypes.BOOLEAN
    },
    sub_order: {
        type: DataTypes.INTEGER
    },
    makat: {
        type: DataTypes.STRING
    },
    provider: {
        type: DataTypes.INTEGER
    },
    creator: {
        type: DataTypes.INTEGER
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    unit: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    }
}, {modelName: "SellItem"});