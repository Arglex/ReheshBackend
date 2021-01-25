
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Bid = sequelize.define('Bid', {
    bid_id: {
        type: DataTypes.INTEGER
    },
    order: {
        type: DataTypes.INTEGER
    },
    provider: {
        type: DataTypes.INTEGER
    },
    invitor: {
        type: DataTypes.INTEGER
    },
    bim_commander: {
        type: DataTypes.INTEGER
    },
    proffessional_id: {
        type: DataTypes.INTEGER
    }
});