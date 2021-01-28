
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class UserPermission extends Model {}
UserPermission.init({
    permission_id: {
        type: DataTypes.INTEGER
    },
    permission: {
        type: DataTypes.STRING
    }
}, {modelName: "UserPermission"});