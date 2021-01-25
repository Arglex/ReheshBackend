
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const PullingBag = sequelize.define('PullingBag', {
    bag_id: {
        type: DataTypes.INTEGER
    },
    bag_number: {
        type: DataTypes.INTEGER
    },
    bag_description: {
        type: DataTypes.STRING
    },
    sum_budget: {
        type: DataTypes.INTEGER
    }
});