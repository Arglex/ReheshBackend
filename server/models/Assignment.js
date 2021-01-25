
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Assignment = sequelize.define('Assignment', {
    id: {
        type: DataTypes.INTEGER
    },
    assignment_num: {
        type: DataTypes.STRING
    }
});