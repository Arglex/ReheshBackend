
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const UserRoles = sequelize.define('UserRoles', {
    user_rank: {
        type: DataTypes.INTEGER
    },
    role: {
        type: DataTypes.STRING
    }
});