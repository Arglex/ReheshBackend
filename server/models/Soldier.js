
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Soldier = sequelize.define('Soldier', {
    id: {
        type: DataTypes.INTEGER
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    id_num: {
        type: DataTypes.INTEGER
    }
});