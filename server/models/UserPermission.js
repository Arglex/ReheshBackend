
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const UserPermission = sequelize.define('UserPermission', {
    permission_id: {
        type: DataTypes.INTEGER
    },
    permission: {
        type: DataTypes.STRING
    }
});