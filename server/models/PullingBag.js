
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class PullingBag extends Model {}
PullingBag.init({
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
}, {modelName: "PullingBag"});