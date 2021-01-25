
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const SellItem = sequelize.define('SellItem', {
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
});