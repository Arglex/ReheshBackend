
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Priority extends Model {}
Priority.init({
    id: {
        type: DataTypes.INTEGER
    },
    priority_name: {
        type: DataTypes.STRING
    }
}, {modelName: "Priority"});