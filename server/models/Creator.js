
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Creator extends Model {}
Creator.init({
    id: {
        type: DataTypes.INTEGER
    },
    creator_name: {
        type: DataTypes.STRING
    },
    creator_num: {
        type: DataTypes.STRING
    }
}, {modelName: "Creator"});