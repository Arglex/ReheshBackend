
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class UserRoles extends Model {}
UserRoles.init({
    user_rank: {
        type: DataTypes.INTEGER
    },
    role: {
        type: DataTypes.STRING
    }
}, {modelName: "UserRoles"});