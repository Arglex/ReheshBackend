
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const BudjetType = sequelize.define('BudjetType', {
    type_id: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    }
});