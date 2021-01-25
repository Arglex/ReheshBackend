
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Provider = sequelize.define('Provider', {
    id: {
        type: DataTypes.INTEGER
    },
    provider_name: {
        type: DataTypes.STRING
    }
});