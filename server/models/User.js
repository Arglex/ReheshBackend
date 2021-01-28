const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
    id_num: {
        type: DataTypes.STRING
    },

    user_rank: {
        type: DataTypes.INTEGER
    },

    name: {
        type: DataTypes.STRING
    },

    phone: {
        type: DataTypes.STRING
    },

    bim: {
        type: DataTypes.INTEGER
    },

    department: {
        type: DataTypes.INTEGER
    },

    user_typeid: {
        type: DataTypes.INTEGER
    }

}, {modelName: "User"});