
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Unit = sequelize.define('Unit', {
    unit_id: {
        type: DataTypes.INTEGER
    },
    unit: {
        type: DataTypes.STRING
    }
});