
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Status = sequelize.define('Status', {
    type_id: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    }
});