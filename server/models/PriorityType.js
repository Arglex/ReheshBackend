
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const PriorityType = sequelize.define('PriorityType', {
    type_id: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    }
});