
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Creator = sequelize.define('Creator', {
    id: {
        type: DataTypes.INTEGER
    },
    creator_name: {
        type: DataTypes.STRING
    },
    creator_num: {
        type: DataTypes.STRING
    }
});