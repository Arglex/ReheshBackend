
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Priority = sequelize.define('Priority', {
    id: {
        type: DataTypes.INTEGER
    },
    priority_name: {
        type: DataTypes.STRING
    }
});