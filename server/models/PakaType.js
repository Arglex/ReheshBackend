
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const PakaType = sequelize.define('PakaType', {
    id: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    }
});